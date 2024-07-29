import React, { useEffect, useState } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchBodyParts = async () => {
      try {
        const data = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
          exerciseOptions
        );
        console.log("Body parts data:", data);
        setBodyParts(["all", ...data]);
      } catch (error) {
        console.error("Error fetching body parts:", error);
      }
    };

    fetchBodyParts();
  }, []);

  const handleSearch = async () => {
    if (search) {
      try {
        const exercises = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
          exerciseOptions
        );
        console.log("Exercises data:", exercises);

        // Checking if exercises is an array
        if (Array.isArray(exercises)) {
          const filteredExercises = exercises.filter(
            (item) =>
              item.name.toLowerCase().includes(search) ||
              item.target.toLowerCase().includes(search) ||
              item.equipment.toLowerCase().includes(search) ||
              item.bodyPart.toLowerCase().includes(search)
          );

          window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
          setExercises(filteredExercises);
          setSearch("");
        } else {
          console.error(
            "Error: exercises is not an array. Received:",
            exercises
          );
        }
      } catch (error) {
        console.error("Error fetching exercises:", error);
      }
    }
  };

  return (
    <div className="text-center p-5">
      <h1 className="font-bold text-3xl mb-12">
        Awesome Exercises You <br /> Should Know
      </h1>
      <div className="relative mb-16 w-full lg:w-128 mx-auto">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          className="w-full p-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 pr-16"
        />
        <button
          onClick={handleSearch}
          className="absolute top-0 right-0 h-full bg-red-500 text-white py-2 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Search
        </button>
      </div>
      <div className="w-full p-5">
        <HorizontalScrollbar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </div>
    </div>
  );
};

export default SearchExercises;
