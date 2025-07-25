import {useGoogleLogin} from "@react-oauth/google"
import { googleAuthApi} from "../services/AuthApi"
import { useAuth } from "../contexts/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

const GoogleLogin = () =>{

 const {setIsAutheticated,setUser} = useAuth(); 
 
 const location = useLocation()
 const navigate = useNavigate()

  const from = location.state?.from?.pathname || "/"

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
                  <div>
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
                
              </div>
  )
}

export default GoogleLogin