import React from "react";
import Image from "next/image";
import Logo from "../assets/images/Logo.png";

const Footer = () => (
  <div className="mt-20 bg-[#FFF3F4] py-10">
    <div className="container mx-auto px-4 flex flex-col items-center gap-6">
      <div className="flex items-center justify-center">
        <Image src={Logo} alt="logo" className="w-32 h-auto" />
      </div>

      <div className="flex gap-6 text-gray-600">
        <a href="#home" className="hover:text-gray-900">
          Home
        </a>
        <a href="#exercises" className="hover:text-gray-900">
          Exercises
        </a>
      </div>

      <p className="text-center text-gray-500 mt-6">
        &copy; {new Date().getFullYear()} FitFusion. All rights reserved.
      </p>
    </div>
  </div>
);

export default Footer;
