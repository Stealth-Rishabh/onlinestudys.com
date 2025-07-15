<?php
// NEW, FASTER submit.php

// Handle preflight requests for CORS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    $allowed_origins = [
        'https://www.planeteducation.info',
        'https://planeteducation.info',
        "https://studyabroad.planeteducation.info",
        "http://localhost:5173"
    ];

    $origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';

    if (in_array($origin, $allowed_origins)) {
        header('Access-Control-Allow-Origin: ' . $origin);
    }
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
    header('Access-Control-Max-Age: 86400');
    http_response_code(204);
    exit();
}

// Set headers for the actual request
$allowed_origins = [
    'https://www.planeteducation.info',
    'https://planeteducation.info',
    "https://studyabroad.planeteducation.info",
    "http://localhost:5173"
];
$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';
if (in_array($origin, $allowed_origins)) {
    header('Access-Control-Allow-Origin: ' . $origin);
}
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        $inputJSON = file_get_contents('php://input');
        $formData = json_decode($inputJSON, true);

        if (json_last_error() !== JSON_ERROR_NONE) {
            throw new Exception("Invalid request format.");
        }

        // --- Basic Validation ---
        $required_fields = ['page', 'name', 'email', 'phone', 'state', 'city'];
        foreach ($required_fields as $field) {
            if (empty($formData[$field])) {
                throw new Exception('Missing required fields: ' . $field);
            }
        }

        // --- The ONLY Google Apps Script URL you need ---
        $googleScriptUrl = 'https://script.google.com/macros/s/AKfycbwNlNdUk0dhyu3rXla1HkHskibDUOjRQ6nXzrB7lFcnsAuJIRUf0Q94FSgGjKG6_mBJ/exec';

        // --- Make the SINGLE, FAST call to Google ---
        $ch = curl_init($googleScriptUrl);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $inputJSON); // Pass the original JSON forward
        curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
        curl_setopt($ch, CURLOPT_TIMEOUT, 25);

        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        $curlError = curl_error($ch);
        curl_close($ch);

        if ($curlError) {
            throw new Exception("Network error: " . $curlError);
        }

        if ($httpCode !== 200) {
            throw new Exception("Script service returned HTTP status " . $httpCode);
        }
        
        // --- Directly pass the response from Google back to the form ---
        // This is fast because we are just acting as a proxy.
        error_log("Response from Google Script: " . $response);
        echo $response;

    } catch (Exception $e) {
        error_log("Exception in submit.php: " . $e->getMessage());
        http_response_code(500);
        echo json_encode([
            'success' => false,
            'message' => 'Server error: ' . $e->getMessage()
        ]);
    }
} else {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
}
?>





