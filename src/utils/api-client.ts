import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3333/api",
  timeout: 60000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const useApiClient = () => {
  return apiClient;
};
