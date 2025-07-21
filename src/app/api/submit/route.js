// src/app/api/submit/route.js

export async function POST(request) {
  // Allow CORS for frontend requests
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  // Handle OPTIONS request for CORS preflight
  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers });
  }

  if (request.method !== "POST") {
    return new Response(
      JSON.stringify({
        success: false,
        message: "Method not allowed. Use POST.",
      }),
      {
        status: 405,
        headers: { ...headers, "Content-Type": "application/json" },
      }
    );
  }

  try {
    // Parse JSON body
    const formData = await request.json();

    // Validate required fields
    const required = ["name", "email", "phone", "state", "city"];
    const missing = required.filter((k) => !formData[k]);
    if (missing.length > 0) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Missing fields: " + missing.join(", "),
        }),
        {
          status: 400,
          headers: { ...headers, "Content-Type": "application/json" },
        }
      );
    }

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      return new Response(
        JSON.stringify({ success: false, message: "Invalid email format." }),
        {
          status: 400,
          headers: { ...headers, "Content-Type": "application/json" },
        }
      );
    }

    // Validate phone number
    if (!/^[6-9][0-9]{9}$/.test(formData.phone)) {
      return new Response(
        JSON.stringify({ success: false, message: "Invalid phone number." }),
        {
          status: 400,
          headers: { ...headers, "Content-Type": "application/json" },
        }
      );
    }

    // Google Apps Script integration
    const googleScriptUrl =
      "https://script.google.com/macros/s/AKfycby_ttQOhWBpXMuRuYaT-M4cEAxneKAj9fw1mMZEVno4pd_ysy_-GwVKdPxzXIRqtDvrgw/exec";

    // 1. Check duplicate phone
    const checkResp = await fetch(googleScriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "checkPhone", phone: formData.phone }),
    });

    if (!checkResp.ok) {
      throw new Error(`Google Script check failed: ${checkResp.status}`);
    }

    const checkResult = await checkResp.json();
    if (checkResult.isDuplicate === true) {
      return new Response(
        JSON.stringify({
          success: false,
          isDuplicate: true,
          message:
            "This phone number has already been used to submit an inquiry.",
        }),
        {
          status: 200,
          headers: { ...headers, "Content-Type": "application/json" },
        }
      );
    }

    // 2. Write data
    const writePayload = { ...formData, action: "writeData" };
    const writeResp = await fetch(googleScriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(writePayload),
    });

    if (!writeResp.ok) {
      throw new Error(`Google Script write failed: ${writeResp.status}`);
    }

    const writeResult = await writeResp.json();

    if (writeResult.success === true) {
      return new Response(
        JSON.stringify({
          success: true,
          message: writeResult.message || "Form submitted successfully.",
        }),
        {
          status: 200,
          headers: { ...headers, "Content-Type": "application/json" },
        }
      );
    } else {
      return new Response(
        JSON.stringify({
          success: false,
          message:
            writeResult.message ||
            "Data submission failed due to script error.",
        }),
        {
          status: 500,
          headers: { ...headers, "Content-Type": "application/json" },
        }
      );
    }
  } catch (error) {
    console.error("API Error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Server error: " + error.message,
      }),
      {
        status: 500,
        headers: { ...headers, "Content-Type": "application/json" },
      }
    );
  }
}
