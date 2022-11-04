import Image from "next/image";
import React from "react";
import { HeartIcon } from "@heroicons/react/outline";

const InfoCard = ({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
  long,
  lat,
}) => {
  return (
    <div className="flex mb-4">
      <div className="relative h-24 w-40 md:w-80 md:h-52 flex-shrink-0 ">
        <Image
          className="rounded-md"
          src={img}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="flex flex-col flex-grow pl-5">
        <div className="flex">
          <p className="flex-1">{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>
        <h4 className="text-xl">{title}</h4>

        <div className="border-b w-10 pt-2" />

        <p className="pt-2 text-sm text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
