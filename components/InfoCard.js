import Image from "next/image";
import React from "react";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

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
    <div className="flex mb-4 hover:shadow-lg transition duration-200 ease-out py-4 px-2 border-b cursor-pointer hover:opacity-80 rounded-md first:border-t">
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

        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>

        <div className="flex items-end justify-between pt-5">
          <p className="flex items-center ">
            <StarIcon className="h-7 text-red-400" />
            {star}
          </p>
          <div>
            <p className="text-lg font-semibold pb-2 lg:text-2xl">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
