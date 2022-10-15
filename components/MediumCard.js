import Image from "next/image";
import React from "react";

const MediumCard = ({ title, img }) => {
  return (
    <div
      className="flex flex-col cursor-pointer
     hover:scale-105 transform 
     transition duration-300 ease-out"
    >
      <div className="relative h-80 w-80">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>

      <div>
        <h1 className="text-2xl mt-3">{title}</h1>
      </div>
    </div>
  );
};

export default MediumCard;
