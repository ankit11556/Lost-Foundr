import axios from "axios";

const API_URL = import.meta.env.VITE_SERVER_API_URL;

const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

// OPTIONAL: Set access token before request
axiosInstance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("access_token"); // or use cookie if you're storing it
  if (accessToken) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    
    if (
      (error.response?.status === 401 || error.response?.status === 403) &&
      !originalRequest._retry &&
      !originalRequest.url.includes("/auth/refresh-token")
    ) {
      originalRequest._retry = true;
      try {
        console.log("Trying to refresh token...");

        const res = await axios.get(`${API_URL}/auth/refresh-token`, {
          withCredentials: true,
        });

        const newAccessToken = res.data.accessToken;

        // ✅ Save token
        localStorage.setItem("access_token", newAccessToken);

        //  Add to retry request
        originalRequest.headers = originalRequest.headers || {};
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

        return axiosInstance(originalRequest);
      } catch (refreshError) {
        console.error("Token refresh failed:", refreshError.message);

        //  Avoid infinite redirect loops
        if (window.location.pathname !== "/login") {
          localStorage.removeItem("access_token");
          window.location.href = "/login";
        }

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);


export default axiosInstance;
