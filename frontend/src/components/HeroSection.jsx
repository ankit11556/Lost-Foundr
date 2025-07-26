import { Plus, Search } from "lucide-react"; // Lucide icons
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 via-white to-purple-50 text-slate-800 py-10 px-6 sm:px-8 md:px-12 lg:px-10 text-center border rounded-2xl shadow-lg  max-w-6xl mt-8  mx-auto ">
      
     

      <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-semibold mb-4 tracking-wide shadow-sm">
        👀 Find or Report Lost Items
      </div>

      <h1 className="text-4xl sm:text-4xl font-bold mb-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-600">
        Lost Something? Found Something?
      </h1>

      <p className="text-lg sm:text-xl  text-slate-700 flex items-center justify-center gap-2 mb-8">
        <Search className="w-5 h-5 text-blue-500" />
        Help reunite people with what matters.
      </p>
     
     <div className="flex justify-center">
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl text-lg flex items-center justify-center gap-2 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
        
        <Plus className="w-5 h-5" />
        <Link to="/add-post">
        Add a Post
        </Link>
      </button>
      </div>
      
    </section>
  );
};

export default HeroSection;
