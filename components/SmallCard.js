import Image from "next/image";
import React from "react";

const smallCard = ({ img, location, distance }) => {
  return (
    <div
      className="flex items-center space-x-4
    m-2 mt-5 rounded-xl cursor-pointer
    transition transform duration-300 hover:bg-gray-100
    hover:shadow-lg hover:scale-105 ease-out"
    >
      <div className="relative h-16 w-16">
        <Image
          src={img}
          className="rounded-xl"
          layout="fill"
          objectFit="contain"
        />
      </div>

      <div className="flex flex-col">
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
};

export default smallCard;
