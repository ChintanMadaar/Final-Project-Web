import Image from "next/image";
// import App from "./App";
import React from "react";
import Home from "./pages/Home";
<<<<<<< HEAD
import ExerciseDetail from "./pages/ExerciseDetail";
=======
import ExerciseDtl from "./pages/ExerciseDtl";
>>>>>>> 692c18853dcc5083421540fe30eb3eaf70465bba
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <main className=" bg-white min-h-screen">
      <div className="text-black">
        <Navbar />
        <Home />
<<<<<<< HEAD
        <ExerciseDetail />
=======
        <ExerciseDtl />
>>>>>>> 692c18853dcc5083421540fe30eb3eaf70465bba
        <Footer />
      </div>
    </main>
  );
}
