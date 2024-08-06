import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import BodyPart from "./BodyPart";
import ExerciseCard from "./ExerciseCard";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";

const LeftArrow = () => {
  const { scrollPrev } = React.useContext(VisibilityContext);
  return (
    <div
      onClick={() => scrollPrev()}
      className="flex items-center justify-center cursor-pointer p-2 bg-gray-200 rounded-full"
    >
      <img src={LeftArrowIcon} alt="left-arrow" className="w-6 h-6" />
    </div>
  );
};

const RightArrow = () => {
  const { scrollNext } = React.useContext(VisibilityContext);
  return (
    <div
      onClick={() => scrollNext()}
      className="flex items-center justify-center cursor-pointer p-2 bg-gray-200 rounded-full"
    >
      <img src={RightArrowIcon} alt="right-arrow" className="w-6 h-6" />
    </div>
  );
};

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
  <ScrollMenu
    LeftArrow={LeftArrow}
    RightArrow={RightArrow}
    className="overflow-hidden whitespace-nowrap"
  >
    {data.map((item) => (
      <div
        key={item.id || item}
        itemId={item.id || item}
        title={item.id || item}
        className="flex-shrink-0 mx-2"
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
