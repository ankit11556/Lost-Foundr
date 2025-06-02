 import axios from "axios"
 const API_URL = import.meta.env.VITE_SERVER_API_URL;
 
 
 export const addPostApi = async (data) => {
  console.log(data);
  
  return await axios.post(`${API_URL}/post/add`,data)
 }