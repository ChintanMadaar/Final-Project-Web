import React, { useEffect, useState } from "react";
import ExerciseCard from "./ExerciseCard";
import Loader from "./Loader";
import { exerciseOptions, fetchData } from "../utils/fetchData";

const Exercises = ({ exercises = [], setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);

  useEffect(() => {
    const fetchExercisesData = async () => {
      try {
        let exercisesData = [];

        const url =
          bodyPart === "all"
            ? "https://exercisedb.p.rapidapi.com/exercises"
            : `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`;

        exercisesData = await fetchData(url, exerciseOptions);
        setExercises(exercisesData);
      } catch (error) {
        console.error("Failed to fetch exercises:", error);
      }
    };

    fetchExercisesData();
  }, [bodyPart, setExercises]);

  const totalPages = Math.ceil(exercises.length / exercisesPerPage);

  const currentExercises = Array.isArray(exercises)
    ? exercises.slice(
        (currentPage - 1) * exercisesPerPage,
        currentPage * exercisesPerPage
      )
    : [];

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (!currentExercises.length) return <Loader />;

  return (
    <div id="exercises" className="mt-12 p-5">
      <h2 className="text-4xl font-bold mb-12 text-center">Showing Results</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {currentExercises.map((exercise, idx) => (
          <div key={idx} className="m-2">
            <ExerciseCard exercise={exercise} />
          </div>
        ))}
      </div>
      {totalPages > 1 && (
        <div className="mt-14 flex justify-center items-center">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="bg-gray-300 text-gray-800 p-2 rounded-l-lg hover:bg-gray-400"
            >
              Previous
            </button>
            <span className="text-lg font-semibold">{currentPage}</span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="bg-gray-300 text-gray-800 p-2 rounded-r-lg hover:bg-gray-400"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Exercises;
