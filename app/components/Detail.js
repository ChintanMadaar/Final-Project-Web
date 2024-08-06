import React from "react";
import Image from "next/image";
import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-16 p-5 lg:p-10 items-center">
      <Image
        src={gifUrl}
        alt={name}
        layout="responsive"
        width={500} // Adjust width as needed
        height={300} // Adjust height as needed
        className="rounded-lg"
      />
      <div className="flex flex-col gap-8 lg:gap-12">
        <h1 className="text-4xl lg:text-6xl font-bold capitalize text-gray-800">
          {name}
        </h1>
        <p className="text-lg lg:text-2xl text-gray-600">
          Exercises keep you strong. <span className="capitalize">{name}</span>{" "}
          is one of the best <br /> exercises to target your {target}. It will
          help you improve your <br /> mood and gain energy.
        </p>
        {extraDetail?.map((item) => (
          <div key={item.name} className="flex items-center gap-6">
            <button className="bg-yellow-100 rounded-full p-4 w-24 h-24 flex items-center justify-center">
              <Image
                src={item.icon}
                alt={item.name}
                width={48} // Adjust width as needed
                height={48} // Adjust height as needed
              />
            </button>
            <p className="text-2xl lg:text-3xl capitalize text-gray-800">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detail;
