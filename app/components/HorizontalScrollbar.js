import React, { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import Image from "next/image"; // Import Image from next/image

// Import images at the top
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";

import ExerciseCard from "./ExerciseCard";
import BodyPart from "./BodyPart";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <div
      onClick={() => scrollPrev()}
      className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full cursor-pointer"
    >
      <Image src={LeftArrowIcon} alt="left-arrow" width={24} height={24} />
    </div>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <div
      onClick={() => scrollNext()}
      className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full cursor-pointer"
    >
      <Image src={RightArrowIcon} alt="right-arrow" width={24} height={24} />
    </div>
  );
};

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
  <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
    {data.map((item) => (
      <div
        key={item.id || item}
        itemId={item.id || item}
        title={item.id || item}
        className="m-2 flex-shrink-0"
      >
        {bodyParts ? (
          <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
        ) : (
          <ExerciseCard exercise={item} />
        )}
      </div>
    ))}
  </ScrollMenu>
);

export default HorizontalScrollbar;
