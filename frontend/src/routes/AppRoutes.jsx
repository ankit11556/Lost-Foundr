import { Routes,Route } from "react-router-dom";
import AddPost from "../pages/AddPost";
import Navbar from "../components/Navbar";
import HomePage from "../pages/HomePage";
const AppRoutes = () =>{
  return(
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="add-post" element={<AddPost/>}></Route>
      <Route path="my-post"></Route>

    </Routes>
    </>
  )
}

export default AppRoutes