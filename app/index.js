"use client";
import React, { useState } from "react";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SimilarExercises from "./components/SimilarExercises"; // Import this component if you need it
import LoginForm from "./pages/loginform";

export default function Page() {
  // State to track the selected exercise
  const [selectedExercise, setSelectedExercise] = useState(null);

  // Sample data for similar exercises; replace with actual data
  const targetMuscleExercises = []; // Replace with actual data
  const equipmentExercises = []; // Replace with actual data

  return (
    <main className="bg-white min-h-screen">
      <div>
        <LoginForm />
      </div>
      <div className="text-black">
        <Navbar />

        {/* Conditionally render Home or ExerciseDetail based on selection */}
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
