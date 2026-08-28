import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL?.trim().replace(/\/+$/, "");

if (!baseURL) {
  console.warn(
    "VITE_API_BASE_URL is not configured. Add it to your .env file.",
  );
}

const axiosInstance = axios.create({
  baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 15000,
});

export default axiosInstance;
