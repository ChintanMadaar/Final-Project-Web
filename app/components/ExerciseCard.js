import React from "react";

const ExerciseCard = ({ exercise }) => {
  const handleClick = () => {
    // Navigate to the exercise details page
    window.location.href = `/exercise/${exercise.id}`;
  };

  return (
    <div
      className="exercise-card p-4 bg-white rounded-lg shadow-md hover:shadow-lg cursor-pointer"
      onClick={handleClick}
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
    </div>
  );
};

export default ExerciseCard;
