import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom"
import { emailVerifyApi } from "../services/AuthApi";

const VerifyEmail = () =>{
  const [searchParams] = useSearchParams();
  const [message,setMessage] = useState('Verifing...');
  const token = searchParams.get('token');

  const navigate = useNavigate()

  useEffect(()=>{
    if (!token) {
      setMessage('Token not found')
      return;
    }

    const verifyEmail = async () => {
      try {
        const res = await emailVerifyApi(token);
        setMessage(res.data.message)
      } catch (error) {
        setMessage(error.response?.data?.message || "Verification failed");
      }
    };
    verifyEmail()
  },[token,navigate])
  return (
   <div>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
     <h2 className="text-2xl font-semibold text-gray-800 mb-4">{message}</h2>

     {message == "Email already verified" && (
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      onClick={()=> navigate('/login')}>
        Go to Login</button>
     )}

    </div>
   </div>
  )
}

export default VerifyEmail