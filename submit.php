<?php
// Set up error logging to a file in the same directory.
// Make sure the directory is writable by the web server.
ini_set('log_errors', 1);
ini_set('error_log', __DIR__ . '/php_errors.log');

// Handle preflight requests for CORS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
    header('Access-Control-Max-Age: 86400');
    http_response_code(204); // No Content for OPTIONS
    exit();
}

// Set headers for the actual request
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        $inputJSON = file_get_contents('php://input');
        $formData = json_decode($inputJSON, true);

        if (json_last_error() !== JSON_ERROR_NONE) {
            throw new Exception("Invalid JSON received: " . json_last_error_msg());
        }

        // --- VALIDATION ---
        $required_fields = ['name', 'email', 'phone', 'state', 'city'];
        $missing_fields = [];
        foreach ($required_fields as $field) {
            if (empty($formData[$field])) {
                $missing_fields[] = $field;
            }
        }

        if (!empty($missing_fields)) {
            http_response_code(400); // Bad Request
            echo json_encode(['success' => false, 'message' => 'Missing required fields: ' . implode(', ', $missing_fields)]);
            exit;
        }

        if (!filter_var($formData['email'], FILTER_VALIDATE_EMAIL)) {
            http_response_code(400); // Bad Request
            echo json_encode(['success' => false, 'message' => 'Invalid email format.']);
            exit;
        }

        $phoneNumber = trim($formData['phone']);
        if (!preg_match('/^[6-9][0-9]{9}$/', $phoneNumber)) {
            http_response_code(400); // Bad Request
            echo json_encode(['success' => false, 'message' => 'Invalid phone number format. Must be 10 digits starting with 6, 7, 8, or 9.']);
            exit;
        }

        // --- ACTION REQUIRED: VERIFY YOUR GOOGLE APPS SCRIPT URL ---
        // This must be the correct, latest deployment URL for your script.
        $googleScriptUrl = 'https://script.google.com/macros/s/AKfycby_ttQOhWBpXMuRuYaT-M4cEAxneKAj9fw1mMZEVno4pd_ysy_-GwVKdPxzXIRqtDvrgw/exec';

        if (empty($googleScriptUrl) || strpos(strtolower($googleScriptUrl), 'akfyc') === false) {
             throw new Exception("Server configuration error: Google Apps Script URL is not set or invalid.");
        }

        // --- STAGE 1: CHECK FOR DUPLICATE PHONE NUMBER ---
        $checkPayload = json_encode(['action' => 'checkPhone', 'phone' => $phoneNumber]);
        $curlResponseCheck = callGoogleAppsScript($googleScriptUrl, $checkPayload, 15);

        if (!$curlResponseCheck['success']) {
            throw new Exception($curlResponseCheck['message']);
        }

        $checkResult = $curlResponseCheck['decoded_response'];
        if (isset($checkResult['error'])) {
            throw new Exception("Error during phone verification: " . $checkResult['error']);
        }
        if (!isset($checkResult['isDuplicate'])) {
            throw new Exception("Could not determine phone status from script response.");
        }
        if ($checkResult['isDuplicate'] === true) {
            echo json_encode([
                'success' => false,
                'isDuplicate' => true,
                'message' => 'This phone number has already been used to submit an inquiry.'
            ]);
            exit;
        }

        // --- STAGE 2: IF NOT DUPLICATE, WRITE DATA ---
        $writeDataPayload = $formData;
        $writeDataPayload['action'] = 'writeData';
        $curlResponseWrite = callGoogleAppsScript($googleScriptUrl, json_encode($writeDataPayload), 20);

        if (!$curlResponseWrite['success']) {
            throw new Exception($curlResponseWrite['message']);
        }

        $writeResult = $curlResponseWrite['decoded_response'];
        if (!isset($writeResult['success']) || $writeResult['success'] === false) {
            throw new Exception($writeResult['message'] ?? "Data submission failed due to an unspecified script error.");
        }
        
        // Final success response
        echo json_encode([
            'success' => true,
            'message' => $writeResult['message'] ?? 'Form submitted successfully.'
        ]);

    } catch (Exception $e) {
        error_log("Exception in submit.php: " . $e->getMessage());
        if (http_response_code() === 200) {
            http_response_code(500); // Internal Server Error
        }
        echo json_encode([
            'success' => false,
            'message' => 'Server error: ' . $e->getMessage()
        ]);
    }
} else {
    http_response_code(405); // Method Not Allowed
    echo json_encode([
        'success' => false,
        'message' => 'Method not allowed. Only POST is accepted.'
    ]);
}
exit();

/**
 * Helper function to call Google Apps Script via cURL.
 *
 * @param string $url The Google Apps Script URL.
 * @param string $payload JSON string payload.
 * @param int $timeout Timeout in seconds.
 * @return array ['success' => bool, 'decoded_response' => array|null, 'message' => string]
 */
function callGoogleAppsScript($url, $payload, $timeout)
{
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true); // Essential for Apps Script
    curl_setopt($ch, CURLOPT_MAXREDIRS, 5);
    curl_setopt($ch, CURLOPT_TIMEOUT, $timeout);
    // In production, consider enabling SSL verification with a CA bundle
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);

    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $curlError = curl_error($ch);
    curl_close($ch);

    $logIdentifier = json_decode($payload, true)['action'] ?? 'unknown_action';

    if ($curlError) {
        error_log("Curl error for '{$logIdentifier}': " . $curlError);
        return ['success' => false, 'decoded_response' => null, 'message' => "Network error communicating with script service."];
    }
    
    if ($httpCode !== 200) {
        error_log("HTTP error for '{$logIdentifier}': Code {$httpCode}, Response: " . $response);
        return ['success' => false, 'decoded_response' => null, 'message' => "Script service returned HTTP {$httpCode}."];
    }

    $decodedResponse = json_decode($response, true);
    if (json_last_error() !== JSON_ERROR_NONE) {
        error_log("Invalid JSON response for '{$logIdentifier}': " . $response);
        return ['success' => false, 'decoded_response' => null, 'message' => "Invalid response format from script service."];
    }

    return ['success' => true, 'decoded_response' => $decodedResponse, 'message' => 'Successfully called script.'];
}
?>
