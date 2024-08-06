import React from "react";
import { InfinitySpin } from "react-loader-spinner";

const Loader = () => (
  <div className="flex items-center justify-center w-full h-full">
    <InfinitySpin color="#FF2625" /> {/* Changed the color to red */}
  </div>
);

export default Loader;
