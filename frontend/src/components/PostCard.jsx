import LikeButton from "./LikeButton"
import CommentButton from "./CommentButton"
const PostCard = ({post})=>{
  return(
  <div className="bg-slate-900 text-white rounded-xl shadow p-5 w-full max-w-[300px] transition-all hover:scale-105 flex flex-col item-between gap-3">
  <p className="text-slate-200">
    Title: <span className="text-white font-semibold">{post.title}</span>
  </p>
  <p className="text-slate-200">Status: 
     <span className={`font-semibold text-white  px-1 py-1 rounded-full text-sm
      ${post.status === 'lost'? 'bg-red-600':'bg-green-600'}`}>
        {post.status}
    
    </span>
  </p>
  <p className="text-slate-200">
    Item Name: <span className="text-white font-semibold">{post.itemName}</span>
  </p>
  <p className="text-slate-200">
    Date: <span className="text-white font-semibold">{new Date (post.date).toLocaleDateString()}</span>
  </p>
  <p className="text-slate-200">
    Location: <span className="text-white font-semibold">{post.location}</span>
  </p>
  <p className="text-slate-200">
    Posted By: <span className="text-white font-semibold">{post.postedBy}</span>
  </p>
  <p className="text-slate-200">
    Contact: <span className="text-white font-semibold">{post.contactInfo}</span>
  </p>
  <div className="flex justify-between">
    <LikeButton></LikeButton>
    <CommentButton></CommentButton>
  </div>
  </div>
  )
}

  export default PostCard