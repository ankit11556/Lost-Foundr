import axios from "axios";

const API_URL = import.meta.env.VITE_SERVER_API_URL;

export const signupApi = async (data) => {
  return await axios.post(`${API_URL}/auth/signup`,data)
}