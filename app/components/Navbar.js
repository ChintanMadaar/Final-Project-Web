import React from "react";
import Logo from "../assets/images/Logo.png";
import Image from "next/image"; // Import the Image component

const Navbar = () => (
  <div className="bg-white flex items-center px-5 ">
    <a href="/" className="flex items-center mr-10 mt-7  ">
      <Image
        src={Logo}
        alt="logo"
        className="w-12 h-12 ml-4 mr-16 pb-2" // Tailwind classes for width and height
      />
    </a>
    <div className="flex gap-10 font-serif text-xl items-end">
      <a
        href="/"
        className="text-gray-800 border-b-2 border-red-500" // Tailwind classes for text color and border
      >
        Home
      </a>
      <a href="#exercises" className="text-gray-800">
        Exercises
      </a>
    </div>
  </div>
);

export default Navbar;
