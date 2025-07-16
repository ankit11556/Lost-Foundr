import axios from "axios"

const API_URL = import.meta.env.VITE_SERVER_API_URL;

const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if(error.response?.status === 401 || error.response?.status === 403 && !originalRequest._retry){
      originalRequest._retry = true;
      try {
        await axiosInstance.get("/auth/refresh-token",{withCredentials: true});
        return axiosInstance(originalRequest);
      } catch (refresError) {
        return Promise.reject(refresError)
      }
    }

    return Promise.reject(error)
  }
)

export default axiosInstance