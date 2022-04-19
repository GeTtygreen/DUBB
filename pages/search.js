import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import Player from "@/components/Player";
import Stadium from "@/components/Stadium";
import Team from "@/components/Team";
import Freeagents from "@/components/Free";
import { baseUrl, fetchApi, injUrl } from "@/utils/utils";
import Layout from "@/components/Layout";
import Sidebar from "@/components/Sidebar";
import Body from "@/components/Body";
import HurtPlayers from "@/components/HurtPlayers";
import { MdGroup } from "react-icons/md";
import { GiBasketballJersey } from "react-icons/gi";
import { SiFreelancer } from "react-icons/si";
import { FaUserInjured } from "react-icons/fa";
import { RiBuilding2Line } from "react-icons/ri";
import SidebarLink from "@/components/SidebarLink";
import pic from "../images/basketball.png";
import Image from "next/image";
import RightSide from '@/components/RightSide'

export default function Search({
  Players,
  InjuredPlayers,
  FreeAgents,
  Teams,
  Stadiums,
}) {
  const [isClicked, setIsClicked] = useState("");

  return (
    <Layout>
      <Header />
      <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 absolute h-full">
        <div className="flex items-center justify-center w-14 h-14  p-0 xl:ml-24 ">
          <Image src={pic} height={50} width={50} alt="basketball goal" />
        </div>
        {/* first button */}
        <button
          onClick={() => {
            if (isClicked === "Players") {
              setIsClicked("");
            } else {
              setIsClicked("Players");
            }
          }}

        >
          <SidebarLink text="Players" Icon={GiBasketballJersey} />
          {isClicked === "Players" && <Player className=""Players={Players} />}
        </button>
        {/* second button */}
        <button
          onClick={() => {
            if (isClicked === "Free Agents") {
              setIsClicked("");
            } else {
              setIsClicked("Free Agents");
            }
          }}
        >
          <SidebarLink text="Free Agents" Icon={SiFreelancer} />
          {isClicked === "Free Agents" && (
            <Freeagents FreeAgents={FreeAgents} />
          )}
        </button>
        {/* third button  */}
        <button
          onClick={() => {
            if (isClicked === "Injured Reserves") {
              setIsClicked("");
            } else {
              setIsClicked("Injured Reserves");
            }
          }}
        >
          <SidebarLink text="Injured Reserves" Icon={FaUserInjured} />
          {isClicked === "Injured Reserves" && (
            <HurtPlayers InjuredPlayers={InjuredPlayers} />
          )}
        </button>
        {/* fourth button */}
        <button
          onClick={() => {
            if (isClicked === "Teams") {
              setIsClicked("");
            } else {
              setIsClicked("Teams");
            }
          }}
        >
          <SidebarLink text="Teams" Icon={MdGroup} />
          {isClicked === "Teams" && <Team Teams={Teams} />}
        </button>
        {/* fifth button  */}
        <button
          onClick={() => {
            if (isClicked === "Stadiums") {
              setIsClicked("");
            } else {
              setIsClicked("Stadiums");
            }
          }}
        >
          <SidebarLink text="Stadiums" Icon={RiBuilding2Line} />
          {isClicked === "Stadiums" && <Stadium Stadiums={Stadiums} />}
        </button>
      </div>
      <div>
        <Body />
      </div>
<RightSide />

      <Footer />
    </Layout>
  );
}

export async function getServerSideProps() {
  const Players = await fetchApi(`${baseUrl}/Players`);
  const FreeAgents = await fetchApi(`${baseUrl}/FreeAgents`);
  const Teams = await fetchApi(`${baseUrl}/AllTeams`);
  const Stadiums = await fetchApi(`${baseUrl}/Stadiums`);
  const InjuredPlayers = await fetchApi(`${injUrl}/InjuredPlayers`);

  return {
    props: {
      Players,
      FreeAgents,
      InjuredPlayers,
      Stadiums,
      Teams,
    },
  };
}
