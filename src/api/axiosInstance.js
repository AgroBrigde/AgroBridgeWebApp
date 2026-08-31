import axios from "axios";

const DEFAULT_BASE_URL = "/api";

const baseURL =
  import.meta.env.VITE_API_BASE_URL?.trim().replace(/\/+$/, "") ||
  DEFAULT_BASE_URL;

const axiosInstance = axios.create({
  baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 15000,
});

export default axiosInstance;
