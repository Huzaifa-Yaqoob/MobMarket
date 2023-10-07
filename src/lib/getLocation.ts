type Location = {
  lat: number;
  lng: number;
};

export default function getLocation(): Promise<Location> {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          console.log(`Latitude: ${lat}, Longitude: ${lng}`);
          resolve({ lat, lng });
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
