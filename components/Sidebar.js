import React from "react";
import Image from "next/image";
import SidebarLink from "@/components/SidebarLink";
import { MdGroup } from "react-icons/md";
import { GiBasketballJersey } from "react-icons/gi";
import { SiFreelancer } from "react-icons/si";
import { FaUserInjured } from "react-icons/fa";
import { RiBuilding2Line } from "react-icons/ri";
import Player from "@/components/Player";
import Free from "@/components/Free";
import pic from "../images/basketball.png";
import Link from "next/link";
import { baseUrl, fetchApi } from "@/utils/utils";
import { useState } from "react";
import INJURED_URL from "@/config/api_url";

export default function Sidebar({ Players, FreeAgents }) {
  const [active, setActive] = useState('');
  const [injuredReserves, setInjuredReserves] = useState("Injured Reserved");

  return (
    <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full">
      <div className="flex items-center justify-center w-14 h-14  p-0 xl:ml-24 ">
        <Image src={pic} height={50} width={50} alt="basketball goal" />
      </div>
      <div className="space-y-2.5 mt-4 mb-2.5 xl:ml-5 lg:ml-5  flex flex-col">
        {/* <button
          className="grid overflow-y-scroll scrollbar-hide h-60 py-4 lg:grid-cols-3 xl:grid-cols-4 ml-12 p-4  w-32 "
          onClick={() => setActive("Players")}
        > */}
          {/* {active === "Players" && <Player Players={Players} />} */}
          <SidebarLink text="Players" Icon={GiBasketballJersey} />
        {/* </button> */}
        <button >
          <SidebarLink text="Teams" Icon={MdGroup}
          />
        </button>
        {/* <button
        className="grid overflow-y-scroll scrollbar-hide h-60 py-4 lg:grid-cols-3 xl:grid-cols-4 ml-12 p-4  w-32 "
        onClick={() => setActive("FreeAgents")} >*/ }
       
          {/* {active === "FreeAgents" && <Free FreeAgents={FreeAgents} />} */}
          <SidebarLink text="Free Agents" Icon={SiFreelancer} />
        {/* </button> */}
        <button>
          <SidebarLink text="Injured Reserves" Icon={FaUserInjured} />
        </button>
        <button>
          <SidebarLink text="Stadiums" Icon={RiBuilding2Line} />
        </button>
      </div>
    </div>
  );
}
