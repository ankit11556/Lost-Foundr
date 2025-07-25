import { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { googleAuthApi, loginApi } from "../services/AuthApi"
import { useAuth } from "../contexts/AuthContext"
import {useGoogleLogin} from "@react-oauth/google"
const Login = () =>{

    const {setIsAutheticated,setUser} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/"
    
    const [loginFormData,setLoginFormData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) =>{
        const {name,value} = e.target
        setLoginFormData((prevData)=>({
            ...prevData,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await loginApi(loginFormData)
            alert(response.data.message)
            setIsAutheticated(true)
            setUser(response.data.user)
            navigate(from,{replace:true});
        } catch (error) {
            alert(error.response?.data?.message)
        }
    }
    
    const responseGoogle = async (authResult) => {
        try {
            if(authResult['code']){
              const result = await googleAuthApi(authResult['code'])
               setIsAutheticated(true); // login ho gaya
               setUser(result.data.user)
               navigate(from, { replace: true });
            }
        } catch (error) {
            console.error('error while req',error);
            
        }
    }

    const googleLogin = useGoogleLogin({
        onSuccess: responseGoogle,
        onError: responseGoogle,
        flow: 'auth-code'
    })

  return(
    <section>
   <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                  Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                      <input type="email" name="email" className="bg-gray-50 border border-gray-300  text-sm rounded-lg   block w-full p-2.5" placeholder="name@company.com" required
                      onChange={handleChange}
                      />
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium ">Password</label>
                      <input type="password" name="password"  placeholder="••••••••" className="bg-gray-50 border border-gray-300  text-sm rounded-lg block w-full p-2.5" required 
                       onChange={handleChange}
                      />
                  </div>
                 
                  <button type="submit" className="w-full  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-cente bg-blue-600 text-white hover:cursor-pointer hover:bg-blue-500">Login</button>
                  <p className="text-sm text-black">
                      Don’t have an account yet? <Link to="/signup" className="font-medium text-blue-600 hover:underline ">Sign up</Link>
                  </p>

                    <button
                      type="button"
                      className="w-full flex items-center justify-center gap-2 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-red-500 text-white hover:bg-red-400 hover:cursor-pointer"
                      onClick={() => googleLogin()}
                      >
                     <span className="bg-white p-1 rounded">
                     <img
                     src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                      alt="Google"
                     className="w-5 h-5"
                     />
                    </span>
                   Sign in with Google
                 </button>

              </form>
          </div>
      </div>
  </div>
</section>
  )
}

export default Login

