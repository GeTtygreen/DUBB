import React from "react";
import Image from "next/image";
import SidebarLink from "@/components/SidebarLink";
import { MdGroup } from "react-icons/md";
import { GiBasketballJersey } from "react-icons/gi";
import { SiFreelancer } from "react-icons/si";
import { FaUserInjured } from "react-icons/fa";
import { RiBuilding2Line } from "react-icons/ri";
import pic from "../images/basketball.png";
import { baseUrl, fetchApi } from "@/utils/utils";
import { useState } from "react";
import INJURED_URL from "@/config/api_url";

export default function Sidebar({
  Atlanta,
  Boston,
  Charlotte,
  Chicago,
  Cleveland,
  Dallas,
  Denver,
  Detroit,
  GoldenState,
  Houston,
  Indiana,
  LosAngelesC,
  LosAngelesL,
  Memphis,
  Miami,
  Milwaukee,
  Minnesota,
  NewOrleans,
  NewYork,
  Brooklyn,
  Oklahoma,
  Orlando,
  Philadelphia,
  Phoenix,
  Portland,
  Sacramento,
  Toronto,
  Utah,
  Washington,
}) {
  const [getAllPlayers, setGetAllPlayers] = useState(null);
  const [injuredReserves, setInjuredReserves] = useState("Injured Reserved");

    const handlePlayerClick = async () => {
    const Players = await fetchApi(`${baseUrl}/Players`)
    
    // setGetAllPlayers({ Players: Players });
    console.log(Players);
  };

  return (
    <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full">
      <div className="flex items-center justify-center w-14 h-14  p-0 xl:ml-24 ">
        <Image src={pic} height={50} width={50} alt="basketball goal" />
      </div>
      <div className="space-y-2.5 mt-4 mb-2.5 xl:ml-5 lg:ml-5 ">
        <SidebarLink
          text="Players"
          Icon={GiBasketballJersey}
          handlePlayerClick={handlePlayerClick}
        />
        <SidebarLink text="Teams" Icon={MdGroup} />
        <SidebarLink text="Free Agents" Icon={SiFreelancer} />
        <button
          className="border-none"
          onClick={() => setInjuredReserves("Injured Reserves")}
        >
          <SidebarLink text="Injured Reserves" Icon={FaUserInjured} />
        </button>
        <SidebarLink text="Stadiums" Icon={RiBuilding2Line} />
      </div>
    </div>
  );
}
