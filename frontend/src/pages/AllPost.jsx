import { useState } from "react";
import { getPostApi } from "../services/Api";
import PostCard from "../components/PostCard";
import { useEffect } from "react";
import Filter from "../components/Filter";
const AllPost = () =>{
  const [posts,setPosts] = useState([]);

  const [status,setStatus] = useState('');
  const [itemName,setItemName] = useState('')
  const [notFound,setNotFound] = useState('')

  const fetchData = async (status,itemName) => {
    try {
      const res = await getPostApi(status,itemName);
      setPosts(res.data.data)
      setNotFound('')
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setPosts([])
        setNotFound(error.response.data.message)
      }else{
      console.log(error.data?.data?.message);
      }
    }
  }

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <div className="flex flex-wrap flex-col gap-6 items-center w-full min-h-screen py-6">
      <Filter
      status={status}
      setStatus={setStatus}
      itemName = {itemName}
      setItemName = {setItemName}
      onFilter={fetchData}
      ></Filter>

      {notFound && (
        <p className="text-red-600 text-lg font-semibold">{notFound}</p>
      )}
    {posts.map(post =>(
     <PostCard key={post._id} post={post}></PostCard>
    ))}
    </div>
  )
}

export default AllPost;