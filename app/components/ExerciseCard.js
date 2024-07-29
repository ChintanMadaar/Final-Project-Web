import React from "react";

const ExerciseCard = ({ exercise }) => (
  <a
    href={`/exercise/${exercise.id}`}
    className="block p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
  >
    <img
      src={exercise.gifUrl}
      alt={exercise.name}
      loading="lazy"
      className="w-full h-auto rounded-lg"
    />
    <div className="flex mt-4 space-x-4">
      <button className="bg-[#FFA9A9] text-white px-4 py-2 rounded-full text-xs capitalize">
        {exercise.bodyPart}
      </button>
      <button className="bg-[#FCC757] text-white px-4 py-2 rounded-full text-xs capitalize">
        {exercise.target}
      </button>
    </div>
    <h3 className="mt-3 text-xl font-bold text-black capitalize">
      {exercise.name}
    </h3>
  </a>
);

export default ExerciseCard;
