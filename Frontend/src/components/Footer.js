import React from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 opacity-75 p-4 flex flex-col lg:flex-row items-center justify-between">
      <div className="text-white text-xl lg:text-2xl font-bold mb-4 lg:mb-0">
        <p>InformatiKa</p>
      </div>
      <div className="flex space-x-4">
        <a
          href="https://wa.me/3413217314"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-green-400 transition-colors duration-300 ease-in-out"
        >
          <FaWhatsapp size={20} />
        </a>
        <a
          href="https://www.instagram.com/tu_usuario"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-pink-400 transition-colors duration-300 ease-in-out"
        >
          <FaInstagram size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
