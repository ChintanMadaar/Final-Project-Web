import React from "react";
import { InfinitySpin } from "react-loader-spinner";

const Loader = () => (
  <div className="flex items-center justify-center w-full h-full">
    <InfinitySpin color="#9CA3AF" /> {/* You can change the color as needed */}
  </div>
);

export default Loader;
