import React from "react";
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (
  <div className="mt-[100px] lg:mt-24 xs:mt-0">
    <h2 className="text-[25px] lg:text-[44px] font-bold ml-5 text-black mb-8">
      Similar <span className="text-[#FF2625] capitalize">Target Muscle</span>{" "}
      exercises
    </h2>
    <div className="p-2 relative flex overflow-x-auto">
      {targetMuscleExercises.length !== 0 ? (
        <HorizontalScrollbar data={targetMuscleExercises} />
      ) : (
        <Loader />
      )}
    </div>
    <h2 className="text-[25px] lg:text-[44px] font-bold ml-5 text-black mt-[60px] lg:mt-24 mb-8">
      Similar <span className="text-[#FF2625] capitalize">Equipment</span>{" "}
      exercises
    </h2>
    <div className="p-2 relative flex overflow-x-auto">
      {equipmentExercises.length !== 0 ? (
        <HorizontalScrollbar data={equipmentExercises} />
      ) : (
        <Loader />
      )}
    </div>
  </div>
);

export default SimilarExercises;
