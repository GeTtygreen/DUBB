import React, { useState, useEffect, useRef } from "react";
import { MdOutlineShortText } from "react-icons/md";
import {  RiPictureInPictureExitFill } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import { useClickOutside } from "react-click-outside-hook";
import { useDebounce } from "../hooks/debounceHook";
import logo from "../images/dubb.png";
import axios from "axios";
import Image from "next/image";
import { fetchApi, baseUrl } from "@/utils/utils";
import SEARCH_URL from "@/config/api_url";
import SearchResults from "./SearchResults";

export default function SearchBar(Players, InjuredReserves,FreeAgents ,Teams) {
  const [isExpanded, setExpanded] = useState(false);
  const [parentRef, isClickedOutside] = useClickOutside();
  const inputRef = useRef();
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [teamPlayer, setTeamPlayer] = useState([]);

  const isEmpty = !teamPlayer || teamPlayer.length === 0;

  const changeHandler = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
  };

  const containerVariants = {
    expanded: {
      height: "49em",
    },
    collapased: {
      height: "3.8em",
    },
  };

  const expandContainer = () => {
    setExpanded(true);
  };
  const collapseContainer = () => {
    setExpanded(false);
    setSearchQuery("");
    if (inputRef.current) inputRef.current.value = "";
  };
  useEffect(() => {
    if (isClickedOutside) collapseContainer();
  }, [isClickedOutside]);
  // api key must be hid process.env not working
  const prepareSearchQuery = (query) => {
    const url = `https://api.sportsdata.io/v3/nba/scores/json/Players/${query}?key=5e04705d0d54471db6e04e882792c06f`;
    return encodeURI(url);
  };
  
  const searchPlayers = async () => {
    if (!searchQuery || searchQuery.trim() === "") return;
    setLoading(true);
    const URL = prepareSearchQuery(searchQuery);

    const response = await axios.get(URL).catch((err) => {
      console.log("Error: ", err);
    });

    if (response) {
      setTeamPlayer(response.data);
    }
  };
  useDebounce(searchQuery, 500, searchPlayers);

  const containerTransition = { type: "spring", damping: 22, siffness: 150 };
  return (
    <div ref={parentRef}>
      <div className="max-w-[1000px] bg-[#660708] rounded-full overflow-hiden border-2 border-[orange] p-1.5  px-5 pr-8 flex items-center lg:ml-32">
        <div className="border-2 flex-shrink-0 h-4 w-4 rounded-full" />
        <input
          className="bg-transparent text-[orange] border-none lg:w-full focus:ring-0 outline-none placeholder-[green]
      uppercase
      "
          ref={inputRef}
          transition={containerTransition}
          onFocus={expandContainer}
          type="text"
          placeholder="Search..."
          onChange={changeHandler}
        />
        <motion.div className="flex items-center space-x-1.5 pl-4 text-[green] cursor-pointer">
          <AnimatePresence>
            {isExpanded && (
              <RiPictureInPictureExitFill
                className="hover:text-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={collapseContainer}
                key={RiPictureInPictureExitFill}
              />
            )}
          </AnimatePresence>

          <MdOutlineShortText className="text-2xl" />
          <span className="font-medium text-sm">Filters</span>
        </motion.div>
      </div>
      {/* section that shows search results  */}
      <div>
        {isExpanded && (
          <motion.div
            className="flex flex-col justify-center items-center bg-[#660708] lg:ml-28 text-[orange] max-h-full max-w-full relative overflow-y-auto p-[1em]"
            animate={isExpanded ? "expanded" : "collapsed"}
            variants={containerVariants}
          >
            {isLoading && (
              <Image
                src={logo}
                alt="image of a W"
                height={80}
                width={80}
                onClick={() => router.push("/")}
                className="cursor-pointer animate-spin "
              />
            )}

            {!isEmpty && (
              <>
                {teamPlayer.map((response) => (
                  <SearchResults
                    key={response.PlayerID}
                    PhotoUrl={response.PhotoUrl}
                    FirstName={response.FirstName}
                    LastName={response.LastName}
                    Position={response.Position}
                  />
                ))}
              </>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}
