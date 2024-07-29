import React from "react";
import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => (
  <div className="relative p-5 mt-20 sm:ml-12 lg:mt-52">
    <h1 className="text-red-600 font-semibold text-2xl">Fitness Club</h1>
    <h2 className="font-bold text-4xl lg:text-5xl mb-6 mt-8">
      Sweat, Smile <br />
      And Repeat
    </h2>
    <p className="text-xl font-alegreya leading-9">
      Check out the most effective exercises personalized to you
    </p>
    <div className="mt-12">
      <a
        href="#exercises"
        className="mt-12 no-underline w-48 text-center bg-red-600 p-3 text-xl text-white rounded"
      >
        Explore Exercises
      </a>
    </div>
    <h1 className="font-semibold text-red-600 opacity-10 hidden lg:block text-[200px]">
      Exercise
    </h1>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </div>
);

export default HeroBanner;
