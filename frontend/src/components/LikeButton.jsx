import { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
const LikeButton = () =>{
  const [count,setCount] = useState(0)
  const handleClick = () =>{
    setCount(count+1)
  }
  return(
    <div className=" flex space-x-1 ">
     <button className="hover:cursor-pointer hover:text-blue-500 font-bold text-xl"
     onClick={handleClick}
     >
      <AiOutlineLike /></button>  <span>{count}</span>
    </div>
  )
}

export default LikeButton