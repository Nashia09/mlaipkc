import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://mlailpkc-api-839a553f0085.herokuapp.com/api",
  timeout: 60000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const useApiClient = () => {
  return apiClient;
};
