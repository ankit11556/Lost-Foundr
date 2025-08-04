import { useEffect, useState } from "react"
import { addPostApi, editPostApi } from "../services/Api"
import { useLocation, useNavigate } from "react-router-dom"

const AddPost = () =>{

  const navigate = useNavigate()
  const location = useLocation()

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

  const isEditMode = location.state?.post || null;
  
  useEffect(()=>{
    if (isEditMode) {
      setFormData(isEditMode)
    }
  },[isEditMode])

  const handleSubmit = async(e) =>{
  e.preventDefault();

  const formPayload = new FormData()
  for(const key in formData){
    if(key === "image" && !formData.image) continue
    formPayload.append(key,formData[key])
  }
  try {
    if (isEditMode) {
      const res = await editPostApi(isEditMode._id,formPayload);
      alert(res.data.message)
    } else{
    const res = await addPostApi(formPayload)
    alert(res.data.message)
    }
    navigate("/my-post")
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
        value={formData?.title || ""}
        placeholder="Post Title"
        required
        onChange={handleInputChange}
        className="w-full px-5 py-3 border border-gray-300 rounded-xl text-gray-800 focus:ring-2 focus:ring-blue-400 outline-none"
      />

      <select
        name="status"
        value={formData?.status || ""}
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
        value={formData?.itemName || ""}
        placeholder="Item Name"
        required
        onChange={handleInputChange}
        className="w-full px-5 py-3 border border-gray-300 rounded-xl text-gray-800 focus:ring-2 focus:ring-blue-400 outline-none"
      />

      <input
        type="date"
        name="date"
        value={formData?.date || ""}
        required
        onChange={handleInputChange}
        className="w-full px-5 py-3 border border-gray-300 rounded-xl text-gray-800 focus:ring-2 focus:ring-blue-400 outline-none"
      />

      <input
        type="text"
        name="location"
        placeholder="Location"
        value={formData?.location || ""}
        required
        onChange={handleInputChange}
        className="w-full px-5 py-3 border border-gray-300 rounded-xl text-gray-800 focus:ring-2 focus:ring-blue-400 outline-none"
      />

      <input
        type="text"
        name="postedBy"
        value={formData?.postedBy || ""}
        placeholder="Posted By"
        required
        onChange={handleInputChange}
        className="w-full px-5 py-3 border border-gray-300 rounded-xl text-gray-800 focus:ring-2 focus:ring-blue-400 outline-none"
      />

      <input
        type="text"
        name="contactInfo"
        value={formData?.contactInfo || ""}
        placeholder="Contact Info (Phone / Email)"
        required
        onChange={handleInputChange}
        className="w-full px-5 py-3 border border-gray-300 rounded-xl text-gray-800 focus:ring-2 focus:ring-blue-400 outline-none"
      />

      <input
        type="file"
        name="image"
        // value={formData?.image || ""}
        accept="image/*"
        required={!isEditMode}
        onChange={handleInputChange}
        className="w-full px-5 py-3 border border-gray-300 rounded-xl text-gray-800 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-500 transition-all duration-300 font-semibold text-lg"
      >
      {isEditMode ? "Edit Post" : "📤 Post Now"}
      </button>
    </form>
  </div>
</section>

  )
}

export default AddPost