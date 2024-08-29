import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Brand */}
        <Link to="/" className="text-white hover:text-gray-200">
          <div className="text-white text-2xl font-bold">InformatiKa</div>
        </Link>

        {/* Navigation Menu for Desktop */}
        <ul className="hidden md:flex space-x-6">
          <li className="text-white hover:text-gray-200 rounded transition-transform duration-100 ease-in-out hover:bg-blue-600 hover:scale-105 hover:shadow-lg">
            <Link to="/quehacemos">Qué Hacemos?</Link>
          </li>
          <li className="text-white hover:text-gray-200 rounded transition-transform duration-100 ease-in-out hover:bg-blue-600 hover:scale-105 hover:shadow-lg">
            <Link to="/servicios">Servicios</Link>
          </li>
          <li className="text-white hover:text-gray-200 rounded transition-transform duration-100 ease-in-out hover:bg-blue-600 hover:scale-105 hover:shadow-lg">
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-gray-200 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden mt-4 ${isMenuOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col space-y-4">
          <li className="text-white hover:text-gray-200 rounded transition-transform duration-100 ease-in-out hover:bg-blue-600 hover:scale-105 hover:shadow-lg">
            <Link to="/quehacemos">Qué Hacemos?</Link>
          </li>
          <li className="text-white hover:text-gray-200 rounded transition-transform duration-100 ease-in-out hover:bg-blue-600 hover:scale-105 hover:shadow-lg">
            <Link to="/servicios">Servicios</Link>
          </li>
          <li className="text-white hover:text-gray-200 rounded transition-transform duration-100 ease-in-out hover:bg-blue-600 hover:scale-105 hover:shadow-lg">
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
