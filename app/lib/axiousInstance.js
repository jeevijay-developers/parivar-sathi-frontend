import axios from "axios";

const DEFAULT_BACKEND = "http://localhost:5000/api";
const baseURL = process.env.NEXT_PUBLIC_BASE_URL || DEFAULT_BACKEND;

export const axiosInstance = axios.create({
  baseURL,
});

// Helpful during development: print the resolved base URL once
if (typeof window !== "undefined") {
  // eslint-disable-next-line no-console
  console.log("axios baseURL:", baseURL);
}
