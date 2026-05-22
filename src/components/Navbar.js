import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useState,useEffect } from "react";

function Navbar() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
      document.documentElement.classList.add("dark");
        } 
        else {
      document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);
  return (
    <div className="w-full bg-white dark:bg-richblack-900 shadow-md fixed pt-0">
      <div className="flex justify-between items-center w-11/12 max-w-[1160px] mx-auto py-4">

        
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="w-24 h-24" />
          <h1 className="text-2xl font-bold text-blue-700 dark:text-white">
            PeerReview+
          </h1>
        </div>

       
        <ul className="flex gap-8 text-blue-700 dark:text-white text-lg font-medium">
          <li>
            <Link to="/" className="hover:text-blue-500 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-500 transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/contacts" className="hover:text-blue-500 transition">
              Contacts
            </Link>
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex gap-4">
          <Link to="/login">
            <button className="px-5 py-2 border border-blue-600 text-blue-600 dark:text-white dark:border-white rounded-md hover:bg-blue-600 hover:text-white transition">
              Login
            </button>
          </Link>

          <Link to="/signup">
            <button className="px-5 py-2 border border-blue-600 text-blue-600 dark:text-white dark:border-white rounded-md hover:bg-blue-600 hover:text-white transition">
              Signup
            </button>
          </Link>

           <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 rounded-md bg-gray-200 ">
            {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
        </div>

      </div>
    </div>
  );
}

export default Navbar;