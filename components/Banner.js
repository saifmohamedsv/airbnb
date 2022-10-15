import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src={"https://links.papareact.com/0fm"}
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute text-black text-center top-1/2 w-full">
        <p className="text-sm sm:text-lg md:text-xl lg:text-2xl">
          Not sure where to go? Perfect.
        </p>
        <button
          className="text-purple-500 bg-white px-10 py-4 font-bold
         text- my-3 rounded-full shadow-md
          hover:shadow-xl transition duration-150 active:scale-90"
        >
          I'm flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
