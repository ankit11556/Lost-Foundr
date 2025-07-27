import { useEffect, useState } from "react"
import { getPostApi } from "../services/Api";
import PostCard from "./PostCard";
import {Link} from "react-router-dom"
const RecentPosts = () =>{
  const [posts,setPosts] = useState([]);
  useEffect(()=>{
   getPostApi(null, null, 3)
  .then((res)=>{ 
  setPosts(res.data.data)
  })
  .catch((err) => console.log("Error while fetching posts:", err));
  },[])

  return(
<section className="py-12 px-4 bg-gray-100 mt-8">
  <h2 className="text-3xl font-bold text-center mb-8 text-slate-800">
    Recent Posts
  </h2>

  {posts.length === 0 ? (
<p className="text-center text-gray-500">No recent posts found.</p>
  ):(
<>
<div className="flex flex-wrap mx-2 gap-4 p-6">
  {posts.map((post, index) => (
    <div key={index} className="w-full ">
      <PostCard post={post} />
    </div>
  ))}
</div>


  <div className="text-center">
     <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-lg">
      <Link to="/all-posts">
            See all posts
      </Link>      
      </button>
  </div>
</>
  )}
</section>
  )
}

export default RecentPosts