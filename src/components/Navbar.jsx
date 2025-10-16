import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeadLogo from "/src/assets/img/logo.png";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-md top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Section */}
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img src={HeadLogo} alt="BBDC Logo" className="h-16 w-auto" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              <Link
                to="/"
                className="text-gray-700 hover:text-red-600 font-medium"
              >
                HOME
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-red-600 font-medium"
              >
                ABOUT
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-red-600 font-medium"
              >
                CONTACT
              </Link>
            </div>

            {/* Search Field */}
            <div className="hidden md:flex items-center bg-gray-50 border border-gray-200 rounded-full shadow-inner px-3 py-1.5 w-96 focus-within:ring-2 focus-within:ring-red-300 transition-all duration-200">
              <input
                type="text"
                placeholder="🔍  Search blood donors, district, or group..."
                className="bg-transparent flex-1 outline-none text-sm text-gray-700 placeholder-gray-400 px-2"
              />
              <button className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-full px-4 py-1.5 transition-all duration-200 shadow-md">
                Search
              </button>
            </div>

            {/* Right Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <button className="px-4 py-1.5 text-sm font-medium border border-red-600 text-red-600 rounded-full hover:bg-red-50 transition-all duration-200">
                Sign In
              </button>
              <button className="px-4 py-1.5 text-sm font-medium bg-red-600 text-white rounded-full hover:bg-red-700 shadow-md transition-all duration-200">
                Sign Up
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-red-600 focus:outline-none"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* ✅ Mobile Dropdown (now shows BELOW the navbar) */}
        <div
          className={`md:hidden bg-white shadow-md overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 pt-3 pb-4 space-y-3">
            <Link
              to="/"
              className="block text-gray-700 hover:text-red-600 font-medium"
              onClick={() => setIsOpen(false)}
            >
              HOME
            </Link>
            <Link
              to="/about"
              className="block text-gray-700 hover:text-red-600 font-medium"
              onClick={() => setIsOpen(false)}
            >
              ABOUT
            </Link>
            <Link
              to="/contact"
              className="block text-gray-700 hover:text-red-600 font-medium"
              onClick={() => setIsOpen(false)}
            >
              CONTACT
            </Link>

       <Link to="/" onClick={() => setIsOpen(false)}>
           <div className="relative w-full max-w-sm">
              <input
                type="text"
                placeholder="🔍 Search blood donors, district, or group..."
                className="w-full bg-white border rounded-full py-2 pl-3 pr-20 outline-none text-sm text-gray-700 shadow-sm"
              />
              <button className="absolute right-1 top-1 bottom-1 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-full px-4 transition-all duration-200">
                Search
              </button>
            </div>
       </Link>
          

            {/* Optional Sign Buttons (mobile) */}
            <div className="flex gap-3 pt-2">
              <button className="flex-1 px-4 py-1.5 text-sm font-medium border border-red-600 text-red-600 rounded-full hover:bg-red-50 transition-all duration-200">
                Sign In
              </button>
              <button className="flex-1 px-4 py-1.5 text-sm font-medium bg-red-600 text-white rounded-full hover:bg-red-700 shadow-md transition-all duration-200">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
