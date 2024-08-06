import React from "react";
import Loader from "./Loader";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <Loader />;

  return (
    <div className="mt-20 p-5">
      <h2 className="text-3xl lg:text-4xl font-bold text-black mb-8">
        Watch <span className="text-[#FF2625] capitalize">{name}</span> exercise
        videos
      </h2>
      <div className="flex flex-wrap gap-10 lg:gap-28 justify-start">
        {exerciseVideos?.slice(0, 3)?.map((item, index) => (
          <a
            key={index}
            className="flex flex-col max-w-xs"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="rounded-t-lg"
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
            />
            <div className="p-2">
              <h3 className="text-xl lg:text-2xl font-semibold text-black">
                {item.video.title}
              </h3>
              <p className="text-sm text-black">{item.video.channelName}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ExerciseVideos;
