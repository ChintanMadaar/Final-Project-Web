import React from "react";
import Icon from "../assets/icons/gym.png";

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <div
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
    }}
    className={`flex flex-col items-center justify-center cursor-pointer gap-12 p-6 rounded-xl transition-all duration-300 
      ${bodyPart === item ? "border-t-4 border-[#FF2625] bg-white" : "bg-white"}
      w-[270px] h-[282px]`}
  >
    <img src={Icon} alt="dumbbell" className="w-10 h-10" />
    <h3 className="text-2xl font-bold text-[#3A1212] capitalize">{item}</h3>
  </div>
);

export default BodyPart;
