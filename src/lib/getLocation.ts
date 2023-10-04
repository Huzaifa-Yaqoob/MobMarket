export default function getLocation() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
          resolve({ latitude, longitude });
        },
        (error) => {
          console.error("Error getting location:", error);
          reject(error);
        }
      );
    } else {
      console.error("Geolocation is not supported by your browser.");
      reject(new Error("Geolocation is not supported by your browser."));
    }
  });
}

export async function initializeOrderForm() {
  try {
    const locationData = await getLocation();
    const defaultValues = {
      username: "",
      phone: "",
      location: locationData,
    };
    return defaultValues;
  } catch (error) {
    console.error("Error initializing form with default values:", error);
    // Handle the error gracefully, e.g., set default values to some fallback values.
    const defaultValuesWithError = {
      username: "",
      phone: "",
      location: { latitude: 0, longitude: 0 }, // Fallback values
    };
    return defaultValuesWithError;
  }
}
