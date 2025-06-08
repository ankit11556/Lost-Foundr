const IMAGE_URL = import.meta.env.VITE_SERVER_IMAGE_URL;
import { CiLocationOn } from "react-icons/ci";
import { IoWalletOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
const PostCard = ({post})=>{
  return(
  <div className="max-w-xs md:max-w-md lg:max-w-lg mx-auto w-full h-auto ">
  <div className="bg-white text-slate-800 shadow-xl flex flex-col md:flex-row mx-auto px-6 py-4 rounded-2xl w-full h-auto">

    <div className="w-full md:w-1/3 p-2 bg-white rounded-3xl shadow-xl border border-slate-300">
      <img src={`${IMAGE_URL}/${post.image}`} alt="uploaded" 
      className="w-full h-full object-cover rounded-2xl "
      />
    </div>
    
    <div className="flex flex-col justify-between w-full md:w-2/3 pl-4">
  <div className="flex  w-full justify-between py-2 ">
    <span className="text-3xl font-semibold">{post.title}</span>
    
    <span className={`text-base  px-4 py-1.5 rounded-xl
    ${post.status=='lost'?'bg-red-500':'bg-green-500'}`}>
    {post.status}</span>
  </div>
  <div className="flex justify-around w-full py-2 text-lg">
  <div className="flex flex-col w-full ">
 <div className="flex items-center gap-1">
  <IoWalletOutline />
   <span>{post.itemName}</span>
 </div>
<div className="flex items-center gap-1 ">
  <CiLocationOn /> <span>{post.location}</span>
</div>
  <div className="flex items-center gap-1">
    <CiUser />
    <span>{post.postedBy}</span>
  </div>
  </div>
  <div className="flex flex-col gap-1">
    <span>{new Date(post.date).toLocaleDateString()}</span>
    <span>{post.contactInfo}</span>
  </div>
  </div>
  </div>
  </div>
  </div>
  )
}

  export default PostCard