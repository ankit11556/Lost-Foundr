import axiosInstance from "./axiosInstance";

export const signupApi = async (data) => {
  return await axiosInstance.post(`/auth/signup`,data)
}

export const loginApi = async (data) => {
  return await axiosInstance.post(`/auth/login`,data)
}

export const checkAuthApi = async () => {
  return await axiosInstance.get(`/auth/check-auth`)
}

export const logoutApi = async () => {
  return await axiosInstance.get(`/auth/logout`,{})
}

export const emailVerifyApi = async (token) => {
  return await axiosInstance.post(`/auth/verify-email`,{token:token})
}

export const googleAuthApi = async (code) => {
  return await axiosInstance.get(`auth/google?code=${code}`)
}