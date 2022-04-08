import React from "react";
import { MdOutlineShortText } from "react-icons/md";

export default function SearchBar({ search, setSearch }) {
  return (
    <div className="max-w-[1000px] bg-[#660708] rounded-full overflow-hiden border-2 border-[orange] p-1.5  px-5 pr-8 flex items-center">
      <div className="border-2 flex-shrink-0 h-4 w-4 rounded-full" />
      <input
        className="bg-transparent text-[orange] border-none lg:w-full focus:ring-0 outline-none placeholder-[green]
      uppercase
      "
        type="text"
        value={search}
        placeholder="Search..."
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <div className="flex item-center divide-solid divide-x-2 divide-orange-400 ml-auto">
        <div className="flex space-x-2 text-[green] pr-5">
          <button className="tag">CITY/</button>
          <button className="tag">NAME/</button>
          <button className="tag">SEASON</button>
        </div>
        <div className="flex items-center space-x-1.5 pl-4 text-[green]">
            <MdOutlineShortText className="text-2xl" />
            <span className="font-medium text-sm">Filters</span>
        </div>
      </div>
    </div>
  );
}
