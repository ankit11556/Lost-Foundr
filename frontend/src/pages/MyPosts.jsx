import { useEffect, useState } from "react"
import { getMyPostApi } from "../services/Api"
import PostCard from "../components/PostCard"
import { HiDotsVertical } from "react-icons/hi";

const MyPosts = () =>{
  const [posts,setPosts] = useState([])
  useEffect(()=>{
    const myPostData = async () => {
    try {
      const res = await getMyPostApi();
      setPosts(res.data)
    } catch (error) {
      
    }
  }
  myPostData()
  },[]);

  return(
   <div className="flex flex-col gap-6  py-10 text-center ">
    <h1 className="text-3xl font-bold mb-6">My Posts</h1>
    {posts.map((post, index) => (
  <PostCard key={index} post={post}>
    {/* 👇 3-dot icon as children */}
    <div className="absolute top-2 right-2 z-10 ">
      <div className="relative group">
        <HiDotsVertical className="cursor-pointer text-xl" />
        <div className="hidden group-hover:flex flex-col absolute right-0 mt-0.4 bg-white shadow-md border rounded-md">
          <button className="px-4 py-2 hover:bg-gray-100 text-left">Edit</button>
          <button className="px-4 py-2 hover:bg-gray-100 text-left text-red-500">Delete</button>
        </div>
      </div>
    </div>
  </PostCard>
))}

    
   </div>
  )
}

export default MyPosts