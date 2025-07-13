import axios from "axios";

const API_URL = import.meta.env.VITE_SERVER_API_URL;

export const signupApi = async (data) => {
  return await axios.post(`${API_URL}/auth/signup`,data)
}

export const loginApi = async (data) => {
  return await axios.post(`${API_URL}/auth/login`,data,
    {withCredentials: true}
  )
}

export const checkAuthApi = async () => {
  return await axios.get(`${API_URL}/auth/check-auth`,
    {withCredentials: true}
  )
}

export const logoutApi = async () => {
  return await axios.get(`${API_URL}/auth/logout`,
    {withCredentials: true}
  )
}