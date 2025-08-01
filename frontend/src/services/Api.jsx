import axiosInstance from "./axiosInstance"

 export const addPostApi = async (data) => {
  return await axiosInstance.post(`/post/add`,data,
     {withCredentials: true}
  )
   
 }

 export const getPostApi = async(status,itemName,limit)=>{
 let url = `/post?`;

 if(status){
  url += `status=${status}&`
 }

 if (itemName) {
  url += `itemName=${itemName}`
 }

 if (limit) {
    url += `limit=${limit}`;
  }

 return await axiosInstance.get(url)
 }

 export const getMyPostApi = async () => {
  return await  axiosInstance.get(`post/my-posts`)
 }