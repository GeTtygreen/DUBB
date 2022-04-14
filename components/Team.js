import React from 'react'
import Image from "next/image";

export default function Team({Teams}) {
    let card = Teams.map((e, i) => {
        return (
          <div
            key={i}
            className="bg-gradient-to-r from-[black] via-[#660708] to-[black]  relative  cursor-pointer   hover:scale-105 transition duration-200 ease-out group mx-auto p-10 border-none rounded-lg w-60 scrollbar-hide"
          >
            <h1 className="capatialize text-bold text-[#E85D04] text-2xl text-center  ">
              {e.City} {e.Name}
            </h1>
            <p className=" first-letter:capitalize text-[#E85D04] animate-pulse text-sm italic">
              {e.Key}
            </p>
           
    
            <div className="absolute bottom-2 right-8 inset-x-0 ml-4 items-center space-x-3.5 text-[#E85D04] opacity-10 hover:opacity-100 text-center">
              <p>Conference:{e.Conference}</p>
              <p>Division:{e.Division}</p>
            </div>
          </div>
        );
      });
      return (
      <div className="flex flex-row scrollbar-hide overflow-x-scroll w-36">
    {card}
      </div>);
    }
