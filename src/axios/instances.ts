import axios from "axios";

export const userInstance = axios.create({
  baseURL: "http://localhost:3000/api",
  // timeout: 1000, // Set the timeout as needed
  headers: {
    "Content-Type": "application/json",
  },
});
