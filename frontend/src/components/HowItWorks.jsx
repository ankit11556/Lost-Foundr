const HowItWorks = ()=>{
  return(
    <section className="py-10 bg-gray-100 text-center mt-8">
      <h2 className="text-3xl font-bold mb-6">How its Works</h2>
      <div className="flex flex-col md:flex-row gap-6 justify-center">
        <div className="bg-white shadow-md p-6 rounded-lg w-full md:w-1/3">
          <h3 className="font-semibold text-xl mb-2 ">1. Add Post</h3>
          <p>Post your lost or found item with details.</p>
        </div>
        <div className="bg-white shadow-md p-6 rounded-lg w-full md:w-1/3">
          <h3 className="font-semibold text-xl mb-2 ">2. Search or Wait</h3>
          <p>Other users can search or match with your post.</p>
        </div>
         <div className="bg-white shadow-md p-6 rounded-lg w-full md:w-1/3">
          <h3 className="font-semibold text-xl mb-2 ">3. Reconnect</h3>
          <p>Get connected and reclaim the lost item.</p>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks 