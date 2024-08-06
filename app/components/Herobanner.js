import React from "react";
import Image from "next/image";
import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => (
  <div className="relative p-5 mt-20 sm:ml-12 lg:mt-52 flex items-center justify-between">
    <div className="max-w-lg">
      <h1 className="text-red-600 font-semibold text-2xl">Fitness Club</h1>
      <h2 className="font-bold text-3xl lg:text-4xl mb-6 mt-8">
        Sweat, Smile <br />
        And Repeat
      </h2>
      <p className="text-lg font-alegreya leading-8">
        Check out the most effective exercises personalized to you
      </p>
      <a
        href="#exercises"
        className="mt-12 inline-block w-40 text-center bg-red-600 p-3 text-lg text-white rounded"
      >
        Explore Exercises
      </a>
      <h1 className="absolute top-0 left-0 text-red-600 opacity-10 text-[100px] -z-10 hidden lg:block">
        Exercise
      </h1>
    </div>
    <div className="relative flex-shrink-0">
      <Image
        src={HeroBannerImage}
        alt="hero-banner"
        layout="intrinsic"
        width={600} // Increased width
        height={400} // Increased height
        className="object-cover"
      />
    </div>
  </div>
);

export default HeroBanner;
