<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
=======
import React, { useEffect, useState } from "react";
import HorizontalScrollbar from "./HorizontalScrollbar";
import { exerciseOptions, fetchData } from "../utils/fetchData";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
>>>>>>> 692c18853dcc5083421540fe30eb3eaf70465bba
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
<<<<<<< HEAD
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);
=======
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
>>>>>>> 692c18853dcc5083421540fe30eb3eaf70465bba
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
<<<<<<< HEAD
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
               || item.target.toLowerCase().includes(search)
               || item.equipment.toLowerCase().includes(search)
               || item.bodyPart.toLowerCase().includes(search),
      );

      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

      setSearch('');
      setExercises(searchedExercises);
=======
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
>>>>>>> 692c18853dcc5083421540fe30eb3eaf70465bba
    }
  };

  return (
<<<<<<< HEAD
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
=======
    <div className="flex flex-col items-center mt-9 justify-center p-5">
      <h1 className="font-bold text-4xl lg:text-5xl mb-12 text-center">
        Awesome Exercises You <br /> Should Know
      </h1>
      <div className="relative mb-18">
        <input
          className="h-16 lg:w-[1170px] w-[350px] bg-white rounded-full p-3 font-bold border-none"
>>>>>>> 692c18853dcc5083421540fe30eb3eaf70465bba
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
<<<<<<< HEAD
        <Button className="search-btn" sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }} onClick={handleSearch}>
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
=======
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
>>>>>>> 692c18853dcc5083421540fe30eb3eaf70465bba
