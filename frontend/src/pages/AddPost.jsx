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
    postedBy: "",
    image: null
  })

  

  const handleInputChange  = (e) =>{
   const{name,value,files} = e.target;
  
   if(name === "image"){
    setFormData({
      ...formData,
      [name]:files[0]
    })
   } else{
    setFormData({
      ...formData,
      [name]: value
    })
   }
  }

  const handleSubmit = async(e) =>{
  e.preventDefault();

  const formPayload = new FormData()
  for(const key in formData){
    formPayload.append(key,formData[key])
  }
  try {
    const res = await addPostApi(formPayload)
    console.log(formData);
    
    alert(res.data.message)
  } catch (error) {
    alert(error.res?.data?.message)
  }
  }

  return(
   <section className="min-h-screen  flex items-center justify-center p-6">
  <div className="w-full max-w-xl bg-white shadow-xl rounded-2xl p-8 space-y-6">
    <h1 className="text-3xl font-bold text-center text-gray-800">📢 Add Lost & Found Post</h1>

    <form className="space-y-4" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Post Title"
        required
        onChange={handleInputChange}
        className="w-full px-5 py-3 border border-gray-300 rounded-xl text-gray-800 focus:ring-2 focus:ring-blue-400 outline-none"
      />

      <select
        name="status"
        required
        onChange={handleInputChange}
        className="w-full px-5 py-3 border border-gray-300 rounded-xl text-gray-800 bg-white focus:ring-2 focus:ring-blue-400 outline-none"
      >
        <option value="">Select Status</option>
        <option value="lost">🔍 Lost</option>
        <option value="found">📦 Found</option>
      </select>

      <input
        type="text"
        name="itemName"
        placeholder="Item Name"
        required
        onChange={handleInputChange}
        className="w-full px-5 py-3 border border-gray-300 rounded-xl text-gray-800 focus:ring-2 focus:ring-blue-400 outline-none"
      />

      <input
        type="date"
        name="date"
        required
        onChange={handleInputChange}
        className="w-full px-5 py-3 border border-gray-300 rounded-xl text-gray-800 focus:ring-2 focus:ring-blue-400 outline-none"
      />

      <input
        type="text"
        name="location"
        placeholder="Location"
        required
        onChange={handleInputChange}
        className="w-full px-5 py-3 border border-gray-300 rounded-xl text-gray-800 focus:ring-2 focus:ring-blue-400 outline-none"
      />

      <input
        type="text"
        name="postedBy"
        placeholder="Posted By"
        required
        onChange={handleInputChange}
        className="w-full px-5 py-3 border border-gray-300 rounded-xl text-gray-800 focus:ring-2 focus:ring-blue-400 outline-none"
      />

      <input
        type="text"
        name="contactInfo"
        placeholder="Contact Info (Phone / Email)"
        required
        onChange={handleInputChange}
        className="w-full px-5 py-3 border border-gray-300 rounded-xl text-gray-800 focus:ring-2 focus:ring-blue-400 outline-none"
      />

      <input
        type="file"
        name="image"
        accept="image/*"
        required
        onChange={handleInputChange}
        className="w-full px-5 py-3 border border-gray-300 rounded-xl text-gray-800 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-500 transition-all duration-300 font-semibold text-lg"
      >
       📤 Post Now
      </button>
    </form>
  </div>
</section>

  )
}

export default AddPost