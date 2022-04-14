import React from "react";

export default function Stadiums({ Stadiums }) {
  let card = Stadiums.map((e, i) => {
    return (
      // player card .map//
      <div
        key={i}
        className="bg-gradient-to-r from-[black] via-[#660708] to-[black]  relative  cursor-pointer   hover:scale-105 transition duration-200 ease-out group mx-auto p-10 border-none rounded-lg w-[800px] grid-cols-2 -left-10 scrollbar-hide"
      >
        <h1 className="capatialize text-bold text-[#E85D04] text-2xl text-center  ">
          {e.Name} 
        </h1>
        
    
        <div className="absolute bottom-2 right-8 inset-x-0 ml-4 items-center space-x-3.5 text-[#E85D04] opacity-10 hover:opacity-100 text-center">
          <p>Street:{e.Address}</p>
          <p>City:{e.City}</p>
          <p>State:{e.State}</p>
        </div>
      </div>
    );
  });
  return (
  <div className="flex flex-row scrollbar-hide overflow-x-scroll w-36 ">
{card}
  </div>);
}
