import React from "react";
import SearchBar from "@/components/SearchBar";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Player from "@/components/Player";

export default function Body({
  
  Players,
}) {
  const { data: session } = useSession();
  const accessToken = session;
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  return (
    <section className="ml-24 py-4 space-y-8 md:max-w-6xl lg:ml-40 flex-grow mr-2.5 ">
      <SearchBar search={search} setSearch={setSearch} />
      <div className="grid overflow-y-scroll scrollbar-hide h-60 py-4 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ml-12 p-4 ">
        {/* <Player Players={Players} key={Player.PlayerID} /> */}
      </div>
    </section>
  );
}
