import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://konvo-app.vercel.app/api" : "/api",
  withCredentials: true,
});