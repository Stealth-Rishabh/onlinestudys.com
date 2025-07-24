import { submitLead } from "@/lib/backend";

export const submitAdmissionQuery = async (formData, utmParams = {}) => {
  try {
    console.log("Raw form data received for new API:", formData);

    const apiPayload = {
      Name: formData.name,
      DOB: "12/7/2000",
      EmailId: formData.email,
      Mobile: formData.phone,
      ProgramCode: formData.coursesid || "OGLAMBA201",
      source: "Stealth",
      City: formData.city,
      // Try different field names that CRM might expect
      Source: utmParams.utm_source || "Stealth",
      Medium: utmParams.utm_medium || "",
      Campaign: utmParams.utm_campaign || utmParams.campaign || "",
      Term: utmParams.utm_term || "",
      Content: utmParams.utm_content || "",
      // Keep original UTM fields as backup
      utm_source: utmParams.utm_source || "Stealth",
      utm_medium: utmParams.utm_medium || "",
      utm_campaign: utmParams.utm_campaign || utmParams.campaign || "",
      utm_term: utmParams.utm_term || "",
      utm_content: utmParams.utm_content || "",
    };

    console.log("Constructed payload for new API:", apiPayload);
    const response = await submitLead(apiPayload);
    console.log("New API response:", response);

    if (
      response &&
      typeof response === "string" &&
      (response.startsWith("1@@") || response.includes("successful"))
    ) {
      return {
        success: true,
        message: "Your query has been submitted successfully!",
      };
    } else {
      throw new Error(response || "Failed to submit query");
    }
  } catch (error) {
    console.error("CRM submission error:", error);
    return {
      success: false,
      message: "Failed to submit your query. Please try again later.",
      error: error.message,
    };
  }
};
