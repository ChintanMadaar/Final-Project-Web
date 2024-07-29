import Image from "next/image";
// import App from "./App";
import React from "react";
import Home from "./pages/Home";
import ExerciseDtl from "./pages/ExerciseDtl";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <main className=" bg-white min-h-screen">
      <div className="text-black">
        <Navbar />
        <Home />
        <ExerciseDtl />
        <Footer />
      </div>
    </main>
  );
}
