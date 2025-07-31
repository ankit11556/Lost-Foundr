import { Routes,Route } from "react-router-dom";
import AddPost from "../pages/AddPost";
import Navbar from "../components/Navbar";
import HomePage from "../pages/HomePage";
import AllPost from "../pages/AllPost";
import Signup from "../pages/SignupPage";
import Login from "../pages/LoginPage";
import PrivateRoute from "../components/PrivateRoute";
import VerifyEmail from "../pages/VerifyEmail";
import MyPosts from "../pages/MyPosts";
const AppRoutes = () =>{
  return(
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="all-posts" element={<AllPost/>}></Route>
       <Route element={<PrivateRoute/>}>
        <Route path="add-post" element={<AddPost/>}></Route>
        <Route path="my-post" element={<MyPosts/>}></Route>
       </Route>
       <Route path="verify-email" element={<VerifyEmail/>}></Route>
      <Route path="signup" element={<Signup/>}></Route>
      <Route path="login" element={<Login/>}></Route>
    </Routes>
    </>
  )
}

export default AppRoutes