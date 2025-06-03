import { useEffect, useState } from "react"
import PostCard from "../components/PostCard"
import { getPostApi } from "../services/Api"

const HomePage = () =>{
  const [posts,setPosts] = useState([])
  const fetchData = async () => {
    try {
      const res = await getPostApi()  
      setPosts(res.data.data);
      
    } catch (error) {
      
    }
  }

  useEffect(()=>{
    fetchData()
  },[])

  return(
//  <div className="bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 px-6 py-8 min-h-screen">
//   <div className="flex flex-wrap justify-center gap-6 flex-grow">
<>
<div className=""></div>
    {posts.map(post => (
      <PostCard key={post._id} post={post} />
    ))}

</>
  )
}
export default HomePage