import React from "react";
import Image from "next/image"; // Import the Image component
import Logo from "../assets/images/Logo.png"; // Ensure this path is correct

const Footer = () => (
  <div className="mt-20 bg-[#FFF3F4]">
    <div className="flex flex-wrap justify-center items-center gap-10 px-10 pt-6">
      <Image src={Logo} alt="logo" className="w-25 h-50" />
    </div>
    <h5 className="text-center text-2xl lg:text-3xl mt-10 pb-10"></h5>
  </div>
);

export default Footer;
