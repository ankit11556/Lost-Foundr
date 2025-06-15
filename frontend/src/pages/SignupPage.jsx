import { useState } from "react"
import {Link} from "react-router-dom"
import { signupApi } from "../services/AuthApi"
const Signup = () =>{
    
    const [signupFormData,setSignupFormData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleChange = (e)=>{
      const {name,value} = e.target;
      setSignupFormData((prevData)=>({
        ...prevData,
        [name] : value
      }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await signupApi(signupFormData)
            alert(res.data.message)
        } catch (err) {
            alert(err.response?.data?.message || 'Something went wrong')
        }
    }

  return (
   <section>
   <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                  Create an account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                 <div>
                      <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Your name</label>
                      <input type="text" name="name"  className="bg-gray-50 border border-gray-300  text-sm rounded-lg  block w-full p-2.5"  required  
                      onChange={handleChange}
                      />
                  </div>
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
                 
                  <button type="submit" className="w-full  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-cente bg-blue-600 text-white hover:cursor-pointer hover:bg-blue-500">Create an account</button>
                  <p className="text-sm text-black">
                      Already have an account? <Link to="/login" className="font-medium text-blue-600 hover:underline ">Login here</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
  )
}

export default Signup