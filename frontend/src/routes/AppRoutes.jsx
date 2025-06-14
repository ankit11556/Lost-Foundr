import { Routes,Route } from "react-router-dom";
import AddPost from "../pages/AddPost";
import Navbar from "../components/Navbar";
import HomePage from "../pages/HomePage";
import AllPost from "../pages/AllPost";
import Signup from "../pages/SignupPage";
const AppRoutes = () =>{
  return(
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="all-posts" element={<AllPost/>}></Route>
      <Route path="add-post" element={<AddPost/>}></Route>
      <Route path="my-post"></Route>
       <Route path="signup" element={<Signup/>}></Route>
    </Routes>
    </>
  )
}

export default AppRoutes