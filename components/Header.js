import Image from "next/image";
import React, { useState } from "react";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/solid";
import { DateRangePicker } from "react-date-range";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const [noOfGuests, setNoOfGuests] = useState(1);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleSelect = (ranges) => {
    setStartDate(ranges.Selection.startDate);
    setEndDate(ranges.Selection.endDate);
  };

  const resetInput = () => {
    setSearchInput("")
  }

  const handleSubmit = () => {
    
  }

  const selectionRange = {
    startDate,
    endDate,
    key: "Selection",
  };

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
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <SearchIcon
          className="hidden md:inline-flex h-8
         text-white bg-red-400 rounded-full
          p-2 cursor-pointer"
        />
      </div>

      <div className="flex items-center space-x-4 justify-end">
        <p className="hidden md:block cursor-pointer">Become a host</p>
        <GlobeAltIcon className="hidden md:block h-6 w-6" />
        <div className="flex items-center space-x-2 border-2 rounded-full p-2">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-10">
          <DateRangePicker
            ranges={[selectionRange]}
            onChange={handleSelect}
            minDate={new Date()}
            rangeColors={["#FD5B61 "]}
          />
          <div className="flex items-center border-b mb-4 pb-3">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of guests
            </h2>
            <UserIcon className="h-5" />
            <input min={1} value={noOfGuests} onChange={(e) => setNoOfGuests(e.target.value)} type="number" className="w-12 pl-2 text-red-400 outline-none text-lg" />
          </div>

          <div className="flex mt-2">
            <button className="flex-1 text-gray-500" onClick={resetInput}>CANCEL</button>
            <button className="flex-1 text-red-400">SAVE</button>
          </div>
        </div>
      )}
    </header>
  );
};
export default Header;
