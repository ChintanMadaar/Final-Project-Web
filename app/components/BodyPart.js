import React from "react";
import Image from "next/image";
import Icon from "../assets/icons/gym.png";

const BodyPart = ({ item, setBodyPart, bodyPart, scrollTo }) => (
  <div
    onClick={() => {
      setBodyPart(item);
      if (scrollTo) {
        scrollTo(); // Ensure this function is being called correctly
      }
    }}
    className={`flex flex-col items-center justify-center cursor-pointer gap-4 p-6 rounded-lg transition-all duration-300
      ${bodyPart === item ? "border-2 border-red-600 bg-white" : "bg-gray-200"}
      w-60 h-60 md:w-80 md:h-80`}
  >
    <Image
      src={Icon}
      alt="Body part icon"
      width={64} // Adjust width as needed
      height={64} // Adjust height as needed
      className="object-contain"
    />
    <h3 className="text-lg md:text-xl font-semibold text-gray-700 capitalize">
      {item}
    </h3>
  </div>
);

export default BodyPart;
