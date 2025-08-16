import { useEffect, useState } from "react"
import { deletePostApi, getMyPostApi } from "../services/Api"
import PostCard from "../components/PostCard"
import { HiDotsVertical } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';
const MyPosts = () =>{

  const navigate = useNavigate()
  
  const [posts,setPosts] = useState([])
  useEffect(()=>{
    const myPostData = async () => {
    try {
      const res = await getMyPostApi();
      setPosts(res.data)
    } catch (error) {
      alert(error.res?.data?.message)
    }
  }
  myPostData()
  },[]);

  const handleDelete = async (id) => {
    try {
      const res = await deletePostApi(id)
      alert(res.data.message);

     const newPosts = posts.filter((post)=>post._id !==id)
      setPosts(newPosts)
    } catch (error) {
      console.log(res.data?.message);
      
    }
  }

  return(
   <div className="py-10 text-center ">
    <h1 className="text-3xl font-bold mb-6">My Posts</h1>
    
    {posts.length == 0 ? (
   <div>
    <p className="text-2xl p-4 text-red-500">You haven’t added any posts yet.</p>
    <button 
    onClick={()=>navigate("/add-post")}
    className="bg-blue-600 text-white py-2 px-4 rounded-xl hover:cursor-pointer hover:bg-blue-500 mt-10 text-xl"
    >
      Add Post
      </button>
   </div>
    ):(

    <div className=" w-full flex flex-col  gap-6">
    {posts.map((post, index) => (
  <PostCard key={index} post={post} >
    {/*  3-dot icon as children */}
    <div className="absolute top-2 right-2 z-10 ">
      <div className="relative group">
        <HiDotsVertical className="cursor-pointer text-xl" />
        <div className="hidden group-hover:flex flex-col absolute right-0 mt-0.4 bg-white shadow-md border rounded-md">
          <button className="px-4 py-2 hover:bg-gray-100 text-left"
          onClick={()=> navigate("/add-post",{state: {post:post}})}>
            Edit</button>
          <button className="px-4 py-2 hover:bg-gray-100 text-left text-red-500"
          onClick={()=>handleDelete(post._id)}
          >Delete</button>
        </div>
      </div>
    </div>
  </PostCard>
))}
</div> )}
   </div>
  )
}

export default MyPosts