import React from "react";
import Image from "next/image";
import millify from "millify";

export default function Player({ Players }) {
  let card = Players.map((e, i) => {
    return (
      // player card .map//
      <div
        key={i}
        className="bg-gradient-to-r from-[black] via-[#660708] to-[black]  relative  cursor-pointer   hover:scale-105 transition duration-200 ease-out group mx-auto p-10 border-none rounded-lg  grid-cols-2 -left-10 scrollbar-hide "
      >
        <h1 className="capatialize text-bold text-[#E85D04] text-2xl text-center  ">
          {e.FirstName} {e.LastName}
        </h1>
        <p className=" first-letter:capitalize text-[#E85D04] animate-pulse text-sm italic">
          {e.Status}
        </p>
        <Image
          src={e.PhotoUrl}
          height={100}
          layout="fill"
          alt="e"
          className="h-full w-full absolute inset-0 object-contain rounded-[50px] opacity-100 hidden group-hover:opacity-10"
        />

        <div className="absolute bottom-2 right-8 inset-x-0 ml-4 items-center space-x-3.5 text-[#E85D04] opacity-10 hover:opacity-100 text-center">
          <p>CurrentTeam:{e.Team}</p>
          <p>Position:{e.Position}</p>
          <p>Jersey:{e.Jersey}</p>
        </div>
      </div>
    );
  });
  return (
  <div className="flex flex-row scrollbar-hide overflow-x-scroll w-32">
{card}
  </div>);
}
