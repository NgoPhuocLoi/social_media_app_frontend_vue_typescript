import axios, { type InternalAxiosRequestConfig } from "axios";

const BASE_URL =
  import.meta.env.VITE_BASE_URL || "http://localhost:5000/v1/api";

const getToken = () => localStorage["accesstoken"];

const createApiClient = (uri: string, isProtected: boolean = false) => {
  const axiosClient = axios.create({
    baseURL: `${BASE_URL}${uri}`,
  });

  if (isProtected) {
    axiosClient.interceptors.request.use(
      (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
        config.headers.Authorization = `Bearer ${getToken()}`;
        return config;
      }
    );
  }

  return axiosClient;
};

export default createApiClient;
