import { useState } from "react";
import { FaRegComment } from "react-icons/fa6";
const CommentButton = () =>{
  const [boxShow,setBoxShow] = useState(false)
  const handleClick = () =>{
    setBoxShow(true)
  }
  return(
    <>
    <div>
      <button className="hover:cursor-pointer hover:text-blue-500 "
      onClick={handleClick}
      ><FaRegComment /></button>
      {boxShow &&
      <div>
        <input type="text" placeholder="comment" />
        <button>Add</button>
      </div>
      }
    </div>
    </>
  )
}

export default CommentButton;