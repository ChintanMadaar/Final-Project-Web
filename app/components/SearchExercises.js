import React, { useState, useEffect } from "react";
import HorizontalScrollbar from "./HorizontalScrollbar";
import { exerciseOptions, fetchData } from "../utils/fetchData";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      try {
        const bodyPartsData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
          exerciseOptions
        );

        if (Array.isArray(bodyPartsData)) {
          setBodyParts(["all", ...bodyPartsData]);
        } else {
          console.error("bodyPartsData is not an array:", bodyPartsData);
        }
      } catch (error) {
        console.error("Failed to fetch body parts data:", error);
      }
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      try {
        const exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );

        if (Array.isArray(exercisesData)) {
          const searchedExercises = exercisesData.filter(
            (item) =>
              item.name.toLowerCase().includes(search) ||
              item.target.toLowerCase().includes(search) ||
              item.equipment.toLowerCase().includes(search) ||
              item.bodyPart.toLowerCase().includes(search)
          );

          window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });

          setSearch("");
          setExercises(searchedExercises);
        } else {
          console.error("exercisesData is not an array:", exercisesData);
        }
      } catch (error) {
        console.error("Failed to fetch exercises data:", error);
      }
    }
  };

  return (
    <div className="flex flex-col items-center mt-9 justify-center p-5">
      <h1 className="font-bold text-4xl lg:text-5xl mb-12 text-center">
        Awesome Exercises You <br /> Should Know
      </h1>
      <div className="relative mb-18">
        <input
          className="h-16 lg:w-[1170px] w-[350px] bg-white rounded-full p-3 font-bold border-none"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <button
          className="bg-red-600 text-white font-normal absolute right-0 top-0 mt-2 mr-2 rounded-full h-14 lg:h-12 lg:w-44 w-20 text-lg lg:text-xl"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="relative w-full p-5">
        <HorizontalScrollbar
          data={bodyParts}
          bodyParts
          setBodyPart={setBodyPart}
          bodyPart={bodyPart}
        />
      </div>
    </div>
  );
};

export default SearchExercises;
