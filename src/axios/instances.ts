import axios from "axios";

// exporting headers if i have to send formData or JSONdata
export const headerToSendJSONData = {
  "Content-Type": "application/json",
};

export const headerToSendFormData = {
  "Content-Type": "multipart/form-data",
};

// this function will return axios instance of user and
// we can set headers default header is for sending json data

// this instance will use to register, login, and deleting user account, updating user account.
export const userInstance = (MyHeaders = headerToSendJSONData) => {
  return axios.create({
    baseURL: "http://localhost:3000/api",
    // timeout: 1000, // Set the timeout as needed
    headers: MyHeaders,
  });
};

export const adminActionInstance = (MyHeaders = headerToSendJSONData) => {
  return axios.create({
    baseURL: "http://localhost:3000/api/admin",
    // timeout: 1000, // Set the timeout as needed
    headers: MyHeaders,
  });
};
