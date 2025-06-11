import { useState } from "react";
import { getPostApi } from "../services/Api";
import PostCard from "../components/PostCard";
import { useEffect } from "react";
import Filter from "../components/Filter";
const AllPost = () =>{
  const [posts,setPosts] = useState([]);

  const fetchData = async () => {
    try {
      const res = await getPostApi();
      setPosts(res.data.data)
    } catch (error) {
      console.log(error.data?.data?.message);
    }
  }

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <div className="flex flex-wrap flex-col gap-6 items-center w-full min-h-screen py-6">
      <Filter></Filter>
    {posts.map(post =>(
     <PostCard key={post._id} post={post}></PostCard>
    ))}
    </div>
  )
}

export default AllPost;