import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use((config) => {
  config.headers["x-cg-demo-api-key"] = import.meta.env.VITE_API_KEY;
  return config;
});
