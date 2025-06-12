const Filter = ({status,setStatus,itemName,setItemName,onFilter}) =>{

  const handleOnSearch = ()=>{       
    onFilter(status,itemName)
  }

  return (
    <div className=" flex flex-wrap justify-center gap-4 mb-6 mt-4 w-full ">
      <select className="p-2 rounded-md bg-white text-slate-800 border"
      value={status}
      onChange={(e) =>setStatus(e.target.value)}
      >
        <option value="">All</option>
        <option value="lost">Lost</option>
        <option value="found">Found</option>
      </select>

      <input type="search" placeholder="Search itme name"
      className="p-2 rounded-md bg-white text-slate-800 border"
      value={itemName}
      onChange={(e) =>setItemName(e.target.value)}
      />
      <button className="bg-blue-600 text-white p-2 rounded-xl hover:cursor-pointer hover:bg-blue-800"
      onClick={handleOnSearch}
      >Search</button>
    </div>
  )
}

export default Filter