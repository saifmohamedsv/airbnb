import Image from "next/image";
import React from "react";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
const Header = () => {
  return (
    <header className="sticky top-0 z-50 p-5 md:p-10 grid grid-cols-3 bg-white shadow-md">
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      <div
        className="flex items-center md:border-2 
        rounded-full relative p-2 md:shadow-sm"
      >
        <input
          className="flex-grow pl-5 bg-transparent
           outline-none text-sm text-gray-500
            placeholder-gray-400"
          type="text"
          placeholder="Start you search"
        />
        <SearchIcon
          className="hidden md:inline-flex h-8
         text-white bg-red-400 rounded-full
          p-2 cursor-pointer"
        />
      </div>

      <div className="flex items-center space-x-4 justify-end">
        <p className="hidden md:block cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6" />
        <div className="flex items-center space-x-2 border-2 rounded-full p-2">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
};

export default Header;
