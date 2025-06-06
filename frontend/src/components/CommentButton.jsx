import { useState } from "react";
import { FaRegComment } from "react-icons/fa6";
const CommentButton = () =>{
  const [boxShow,setBoxShow] = useState(false)

  const handleClick = () =>{
   setBoxShow(prev => !prev);
  }
  return(
    <>
    <div className="flex flex-col gap-2 relative h-auto">
      <div className="flex">
      <button className="hover:cursor-pointer hover:text-blue-500  "
      onClick={handleClick}
      ><FaRegComment /></button>
</div>
      {boxShow &&
      <div className="flex">
        <input type="text" placeholder="comment" className="border px-2 py-1 rounded"/>
        <button>Add</button>
      </div>
      }
    </div>
    </>
  )
}

export default CommentButton;