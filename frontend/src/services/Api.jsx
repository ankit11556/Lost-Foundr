 import axios from "axios"
 const API_URL = import.meta.env.VITE_SERVER_API_URL;
 
 
 export const addPostApi = async (data) => {
  return await axios.post(`${API_URL}/post/add`,data)
 }

 export const getPostApi = async(status,itemName)=>{
 let url = `${API_URL}/post?`;

 if(status){
  url += `status=${status}&`
 }

 if (itemName) {
  url += `itemName=${itemName}`
 }

 return await axios.get(url)
 }