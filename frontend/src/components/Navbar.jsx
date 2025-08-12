import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useState } from "react";

const Navbar = () => {
  const { user, userLogout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  // Common link style function
  const linkClasses = ({ isActive }) =>
    `flex items-center p-1 text-lg gap-x-2 hover:text-indigo-600 ${
      isActive ? "text-indigo-600 font-semibold underline" : ""
    }`;

  return (
    <>
      <nav className="w-full bg-white text-slate-800 shadow-sm py-4 px-6 transition duration-200">
        <div className="container mx-auto flex flex-wrap flex-row items-center justify-between px-4 py-2 w-full">
          {/* Logo */}
          <a
            href="/"
            className="mr-4 block cursor-pointer py-1.5 font-bold text-2xl"
          >
            Lost&Foundr
          </a>

          {/* Desktop Menu */}
          <div className="lg:flex hidden items-center">
            <ul className="flex gap-6">
              <li>
                <NavLink to="/" className={linkClasses}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="all-posts" className={linkClasses}>
                  All Post
                </NavLink>
              </li>
              <li>
                <NavLink to="add-post" className={linkClasses}>
                  Add Post
                </NavLink>
              </li>
              <li>
                <NavLink to="my-post" className={linkClasses}>
                  My Post
                </NavLink>
              </li>
            </ul>

            {/* Auth Buttons */}
            <div className="ml-20">
              {user ? (
                <button
                  className="bg-red-600 hover:bg-red-700 text-white p-2 rounded font-medium text-lg hover:cursor-pointer"
                  onClick={userLogout}
                >
                  Logout
                </button>
              ) : (
                <NavLink to="/login">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded font-medium text-lg hover:cursor-pointer">
                    Login
                  </button>
                </NavLink>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden block p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              // Close Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger Icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Slide-in Menu */}
      <nav
        className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white z-40 transform transition-transform duration-300 lg:hidden shadow-lg ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col p-6 gap-6">
          <li>
            <NavLink
              to="/"
              className={linkClasses}
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="all-posts"
              className={linkClasses}
              onClick={() => setIsOpen(false)}
            >
              All Post
            </NavLink>
          </li>
          <li>
            <NavLink
              to="add-post"
              className={linkClasses}
              onClick={() => setIsOpen(false)}
            >
              Add Post
            </NavLink>
          </li>
          <li>
            <NavLink
              to="my-post"
              className={linkClasses}
              onClick={() => setIsOpen(false)}
            >
              My Post
            </NavLink>
          </li>
        </ul>

        {/* Auth Button for Mobile */}
        <div className="px-6">
          {user ? (
            <button
              className="bg-red-600 hover:bg-red-700 text-white p-2 rounded font-medium text-lg w-full"
              onClick={() => {
                userLogout();
                setIsOpen(false);
              }}
            >
              Logout
            </button>
          ) : (
            <NavLink to="/login" onClick={() => setIsOpen(false)}>
              <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded font-medium text-lg w-full">
                Login
              </button>
            </NavLink>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
