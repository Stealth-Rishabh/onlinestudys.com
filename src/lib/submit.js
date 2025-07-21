// pages/api/submit.js

export default async function handler(req, res) {
  // Allow CORS for frontend requests (adjust the origin as needed)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    // CORS preflight
    res.status(204).end();
    return;
  }

  if (req.method !== "POST") {
    res
      .status(405)
      .json({ success: false, message: "Method not allowed. Use POST." });
    return;
  }

  // Parse JSON body
  let formData = req.body;
  if (typeof formData === "string") {
    try {
      formData = JSON.parse(formData);
    } catch (err) {
      res
        .status(400)
        .json({ success: false, message: "Invalid JSON: " + err.message });
      return;
    }
  }

  // Validate required fields
  const required = ["name", "email", "phone", "state", "city"];
  const missing = required.filter((k) => !formData[k]);
  if (missing.length > 0) {
    res
      .status(400)
      .json({
        success: false,
        message: "Missing fields: " + missing.join(", "),
      });
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    res.status(400).json({ success: false, message: "Invalid email format." });
    return;
  }
  if (!/^[6-9][0-9]{9}$/.test(formData.phone)) {
    res.status(400).json({ success: false, message: "Invalid phone number." });
    return;
  }

  // --- Google Apps Script integration ---
  // To POST from Node to your Apps Script, use fetch
  try {
    const googleScriptUrl = "https://script.google.com/macros/s/<YOUR_ID>/exec";

    // 1. Check duplicate phone
    const checkResp = await fetch(googleScriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "checkPhone", phone: formData.phone }),
    });
    const checkResult = await checkResp.json();
    if (checkResult.isDuplicate === true) {
      res.status(200).json({
        success: false,
        isDuplicate: true,
        message:
          "This phone number has already been used to submit an inquiry.",
      });
      return;
    }

    // 2. Write data
    const writePayload = { ...formData, action: "writeData" };
    const writeResp = await fetch(googleScriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(writePayload),
    });
    const writeResult = await writeResp.json();

    if (writeResult.success === true) {
      res.status(200).json({
        success: true,
        message: writeResult.message || "Form submitted successfully.",
      });
      return;
    } else {
      res.status(500).json({
        success: false,
        message:
          writeResult.message || "Data submission failed due to script error.",
      });
      return;
    }
  } catch (e) {
    res.status(500).json({
      success: false,
      message: "Server error: " + e.message,
    });
  }
}
