// src/services/backend.js

export const submitLead = async (apiPayload) => {
  try {
    const baseUrl =
      "https://glawebapi.glaonline.com/api/ChannelPartner/CPRegistrationOnline_API";

    const filteredPayload = Object.fromEntries(
      Object.entries(apiPayload).filter(([, v]) => v !== undefined)
    );
    const queryParams = new URLSearchParams(filteredPayload).toString();
    const apiUrl = `${baseUrl}?${queryParams}`;

    console.log("Sending GET request to API:", apiUrl);

    const response = await fetch(apiUrl, {
      method: "GET",
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("API Error Response:", errorText);
      throw new Error(
        `API request failed with status ${response.status}: ${errorText}`
      );
    }

    // The API returns a JSON-encoded string.
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error submitting lead:", error);
    throw error;
  }
};
