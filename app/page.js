"use client";
import React, { useState } from "react";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SimilarExercises from "./components/SimilarExercises";

export default function Page() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  const targetMuscleExercises = [];
  const equipmentExercises = [];

  return (
    <main className="bg-white min-h-screen">
      <div className="text-black">
        <Navbar />

        {!selectedExercise ? (
          <Home onExerciseSelect={setSelectedExercise} />
        ) : (
          <div>
            <ExerciseDetail exerciseDetail={selectedExercise} />
            <SimilarExercises
              targetMuscleExercises={targetMuscleExercises}
              equipmentExercises={equipmentExercises}
            />
          </div>
        )}

        <Footer />
      </div>
    </main>
  );
}
