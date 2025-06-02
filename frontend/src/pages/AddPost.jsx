import { useState } from "react"
import { addPostApi } from "../services/Api"

const AddPost = () =>{
  const [formData,setFormData] = useState({
    title: "",
    status: "",
    itemName: "",
    date: "",
    location: "",
    contactInfo: "",
    postedBy: ""
  })

  const handleInputChange  = (e) =>{
   setFormData({...formData,[e.target.name]:e.target.value})
  }

  const handleSubmit = async(e) =>{
  e.preventDefault();
  try {
    const res = await addPostApi(formData)
    alert(res.data.message)
  } catch (error) {
    alert(error.res?.data?.message)
  }
  }

  return(
    <section className="bg-neutral-50 min-h-screen  flex items-center justify-center p-6">
    <div className="bg-white p-8 rounded-xl  " >
      <h1 className="text-center font-sans text-xl font-semibold p-3">Add Post Lost&Foundr</h1>
      <form className="flex flex-col space-y-6"
      onSubmit={handleSubmit}>

      <input type="text" placeholder="Enter title " name="title"
      className="border rounded  text-lg font-normal m-2  px-6 py-1"
      onChange={handleInputChange}
      />
        <select className="border rounded  text-lg font-normal m-2 px-6 py-1"
        name="status"
        onChange={handleInputChange}
        >
          <option value="">select</option>
          <option value="lost">Lost</option>
          <option value="found">Found</option>
        </select>

        <input type="text" placeholder="Enter item name " name="itemName"
      className="border rounded  text-lg font-normal m-2  px-6 py-1"
      onChange={handleInputChange}
      />
       
      <input type="date"  name="date"
      className="border rounded  text-lg font-normal m-2 px-6 py-1"
      onChange={handleInputChange}
      />
       <input type="text" placeholder="Enter location " name="location"
      className="border rounded  text-lg font-normal m-2 px-6 py-1"
      onChange={handleInputChange}
      />
       <input type="text" placeholder="posted by " name="postedBy"
      className="border rounded  text-lg font-normal m-2 px-6 py-1"
      onChange={handleInputChange}
      />
       <input type="text" placeholder="Enter contact info " name="contactInfo"
      className="border rounded  text-lg font-normal m-2 px-6 py-1"
      onChange={handleInputChange}
      />
      <button className="m-2 p-2 bg-red-600 text-white hover:pointer hover:bg-red-400 text-lg rounded-xl" 
      type="submit"
      >
        Post</button>
      </form>
    </div>
    </section>
  )
}

export default AddPost