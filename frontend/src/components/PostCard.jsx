import LikeButton from "./LikeButton"
import CommentButton from "./CommentButton"
import { CiLocationOn } from "react-icons/ci";
import { IoWalletOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
const PostCard = ({post})=>{
  return(
  <div className="bg-slate-700 text-white flex flex-col max-w-xs md:max-w-md lg:max-w-lg mx-auto px-8 py-4 rounded-2xl w-full h-auto">
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
  )
}

  export default PostCard