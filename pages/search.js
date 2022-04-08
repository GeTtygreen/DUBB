import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { SEARCH_URL } from "@/config/api_url";
import { BsFilter } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";
import SearchFilters from "@/components/SearchFilters";
import { useState } from "react";
import { useRouter } from "next/router";
import NoImage from "../images/nba (1).png";
import Player from "@/components/Player";
import { baseUrl, fetchApi } from "@/utils/utils";
import Layout from "@/components/Layout";
import Sidebar from "@/components/Sidebar";
import Body from "@/components/Body";
// import millify from "millify";

export default function Search({
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
  Players,
}) {
  const [searchFilters, setSearchFilters] = useState(false);
  const router = useRouter();
  let teamCard = Phoenix.map((e, i) => {
    return (
      

<div key={i} className="flex flex-row">
        
        <div className=" mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <h1 className='text-3xl font-extrabold tracking-tight sm:text-4xl'>
           
         <p>{e.FirstName}  {e.LastName} </p>
         
        </h1>
        <div className="flex bg-yellow-500  aspect-w-2 aspect-h-3">
        <Image
          src={e.PhotoUrl}
          height={110}
          width={100}
          alt="player"
          className="object-cover shadow-lg rounded-lg "
        /> 
        <div>
        <RiTeamFill/>
        <p>Status:  <span className="text-[green] animate-pulse">{e.Status}</span></p>
     
        <p>Team:{e.Team}</p> 
        <p>Position:{e.Position}</p>
        <p>Salary:{e.Salary}</p> 
        </div>
        </div>
        </div>
      </div>
    );
  });

  return (
    <Layout>
      <Header />
      <div >
      <Sidebar  />
      <div>
      <Body />
      </div>
      </div>
      <Player />
      <div>
        {/* {teamCard} */}
        {/* {Player.map(()=><Player Player={Player} key={Player.PlayerID}/>)} */}
        {/* <div
          className="flex cursor-pointer border-b-2   justify-center text-lg"
          onClick={() => setSearchFilters((prevFilters) => !prevFilters)}
        >
          <p>Search by filters </p>
          <BsFilter className="py-1 w-7 h-7" />
        </div>
        {searchFilters && <SearchFilters />}
        <p className="text-2xl p-4 font-bold ">
          Player Details {router.query.player}
        </p>
      </div>
      {{ teamCard }.length === 0 && (
        <div className=" flex flex-col  justify-center items-center mx-2 my-2">
          <Image src={NoImage} alt="No result" />
          <p className="text-2xl my-2">No Image Avaliable</p>
        </div>
      )} */}
      {/* <div className='flex flex-row flex-wrap mx-3 border-2-orange-400'>{teamCard}</div> */}
      </div>
      <Footer />
    </Layout>
  );
}

export async function getServerSideProps() {
  
  const Players = await fetchApi(`${baseUrl}/Players`);
  const Atlanta = await fetchApi(`${baseUrl}/Players/ATL`);
  const Boston = await fetchApi(`${baseUrl}/Players/BOS`);
  const Charlotte = await fetchApi(`${baseUrl}/Players/CHA`);
  const Chicago = await fetchApi(`${baseUrl}/Players/CHI`);
  const Cleveland = await fetchApi(`${baseUrl}/Players/CLE`);
  const Dallas = await fetchApi(`${baseUrl}/Players/DAL`);
  const Denver = await fetchApi(`${baseUrl}/Players/DEN`);
  const Detroit = await fetchApi(`${baseUrl}/Players/DET`);
  const GoldenState = await fetchApi(`${baseUrl}/Players/GSW`);
  const Houston = await fetchApi(`${baseUrl}/Players/HOU`);
  const Indiana = await fetchApi(`${baseUrl}/Players/IND`);
  const LosAngelesC = await fetchApi(`${baseUrl}/Players/LAC`);
  const LosAngelesL = await fetchApi(`${baseUrl}/Players/LAL`);
  const Memphis = await fetchApi(`${baseUrl}/Players/MEM`);
  const Miami = await fetchApi(`${baseUrl}/Players/MIA`);
  const Milwaukee = await fetchApi(`${baseUrl}/Players/MIL`);
  const Minnesota = await fetchApi(`${baseUrl}/Players/MIN`);
  const NewOrleans = await fetchApi(`${baseUrl}/Players/NO`);
  const NewYork = await fetchApi(`${baseUrl}/Players/NY`);
  const Brooklyn = await fetchApi(`${baseUrl}/Players/BKN`);
  const Oklahoma = await fetchApi(`${baseUrl}/Players/OKC`);
  const Orlando = await fetchApi(`${baseUrl}/Players/ORL`);
  const Philadelphia = await fetchApi(`${baseUrl}/Players/PHI`);
  const Phoenix = await fetchApi(`${baseUrl}/Players/PHO`);
  const Portland = await fetchApi(`${baseUrl}/Players/POR`);
  const SanAntonio = await fetchApi(`${baseUrl}/Players/SA`);
  const Toronto = await fetchApi(`${baseUrl}/Players/TOR`);
  const Sacramento = await fetchApi(`${baseUrl}/Players/SAC`);
  const Utah = await fetchApi(`${baseUrl}/Players/UTA`);
  const Washington = await fetchApi(`${baseUrl}/Players/WAS`);
  const Teams = await fetchApi(`${baseUrl}/Players/teams`);
  
  
  return {
    props: {
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
      SanAntonio,
      Toronto,
      Utah,
      Washington,
      Players,
      Teams
    },
  };
}
