import { Link } from "react-router-dom"
const Navbar = () =>{
  return(
   <nav className="w-full bg-white text-slate-800  shadow-md p-4">
  <div className="container mx-auto flex flex-wrap items-center justify-between  px-4 py-2">
    <a href="#"
      className="mr-4 block cursor-pointer py-1.5   font-semibold text-2xl">
      Lost&Foundr
    </a>
    <div className="hidden lg:block">
      <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
         <li className="flex items-center p-1 text-lg gap-x-2  hover:text-indigo-600">
          <Link to="/" className="flex items-center">
           Home
          </Link>
        </li>
        <li className="flex items-center p-1 text-lg gap-x-2 hover:text-indigo-600">
          <Link to="all-posts" className="flex items-center">
          All Post
          </Link>
        </li>
        <li className="flex items-center p-1 text-lg gap-x-2 hover:text-indigo-600">
          <Link to="add-post" className="flex items-center">
            Add Post
          </Link>
        </li>
        <li className="flex items-center p-1 text-lg gap-x-2 hover:text-indigo-600">
          <Link href="" className="flex items-center">
            My Post
          </Link>
        </li>
        <li className="flex items-center p-1 text-lg gap-x-2 hover:text-indigo-600">
          <a href="#" className="flex items-center">
            Support
          </a>
        </li>
      </ul>
    </div>
    <button
      className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
      type="button">
      <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path  strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </span>
    </button>
  </div>
</nav>
  )
}

export default Navbar