import React, { useEffect, useState } from "react";

import ExerciseCard from "./ExerciseCard";
import Loader from "./Loader";
import { exerciseOptions, fetchData } from "../utils/fetchData";

const Exercises = ({ exercises = [], setExercises, bodyPart }) => {
  // Default exercises to an empty array
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);

  const currentExercises = Array.isArray(exercises)
    ? exercises.slice(
        (currentPage - 1) * exercisesPerPage,
        currentPage * exercisesPerPage
      )
    : [];

  const paginate = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  if (!currentExercises.length) return <Loader />;

  return (
    <div id="exercises" className="mt-12 p-5">
      <Typography variant="h4" className="font-bold text-4xl mb-12 text-center">
        Showing Results
      </Typography>
      <Stack direction="row" className="gap-12 flex-wrap justify-center">
        {currentExercises.map((exercise, idx) => (
          <div key={idx} className="m-2 flex-shrink-0">
            <ExerciseCard exercise={exercise} />
          </div>
        ))}
      </Stack>
      <div className="mt-14 flex justify-center">
        {exercises.length > 9 && (
          <div className="pagination">
            <button
              onClick={() => paginate(null, currentPage - 1)}
              disabled={currentPage === 1}
              className="bg-gray-200 p-2 rounded-l"
            >
              Previous
            </button>
            <span className="mx-2">{currentPage}</span>
            <button
              onClick={() => paginate(null, currentPage + 1)}
              disabled={
                currentPage === Math.ceil(exercises.length / exercisesPerPage)
              }
              className="bg-gray-200 p-2 rounded-r"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Exercises;
