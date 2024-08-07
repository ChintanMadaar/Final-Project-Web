import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import BodyPart from "./BodyPart";
import ExerciseCard from "./ExerciseCard";
import Image from "next/image";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";
import "../App.css";

const LeftArrow = () => {
  const { scrollPrev } = React.useContext(VisibilityContext);
  return (
    <div
      onClick={() => scrollPrev()}
      className="flex items-center justify-center cursor-pointer p-2 bg-gray-200 rounded-full absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
    >
      <Image
        src={LeftArrowIcon}
        alt="left-arrow"
        width={24}
        height={24}
        className="object-contain"
      />
    </div>
  );
};

const RightArrow = () => {
  const { scrollNext } = React.useContext(VisibilityContext);
  return (
    <div
      onClick={() => scrollNext()}
      className="flex items-center justify-center cursor-pointer p-2 bg-gray-200 rounded-full absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
    >
      <Image
        src={RightArrowIcon}
        alt="right-arrow"
        width={24}
        height={24}
        className="object-contain"
      />
    </div>
  );
};

// HorizontalScrollbar component
const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
  <div className="relative overflow-x-auto whitespace-nowrap">
    <ScrollMenu
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
      className="flex items-center"
    >
      {data.map((item) => (
        <div
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          className="inline-block mx-2"
        >
          {bodyParts ? (
            <BodyPart
              item={item}
              setBodyPart={setBodyPart}
              bodyPart={bodyPart}
            />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </div>
      ))}
    </ScrollMenu>
  </div>
);

export default HorizontalScrollbar;
