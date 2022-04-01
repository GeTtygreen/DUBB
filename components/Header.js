import Image from "next/image";
import logo from "../images/dubb.png";
import {
  HomeIcon,
  CurrencyDollarIcon,
  SearchIcon,
  StarIcon,
} from "@heroicons/react/solid";
import { signIn } from "next-auth/react";

function Header() {
  return (
    <div className="sticky bg-[#DB8731] top-0 flex items-center px-10 h-[72px] md:px-12 xl:px-16">
      <Image
        src={logo}
        alt="image of a W"
        height={80}
        width={80}
        className="cursor-pointer animate-bounce "
      />
      <div className=" hidden ml-10 md:flex items-center space-x-6">
        <a href="" className="header-link group text-green-600">
          <HomeIcon className="h-4" />
          <span className="relative uppercase text-sm font-medium before:bg-[#f9f9f9] before:rounded-bl before:-bottom-1.5 before:h-0.5 before:inset-x-0 before:absolute before:transform before:origin-left before:scale-x-0 before:transition-all before:duration-200 group-hover:before:scale-x-100">
            Home
          </span>
        </a>
        <a href="" className="header-link group text-green-600">
          <SearchIcon className="h-4" />
          <span className="relative uppercase text-sm font-medium before:bg-[#f9f9f9] before:rounded-bl before:-bottom-1.5 before:h-0.5 before:inset-x-0 before:absolute before:transform before:origin-left before:scale-x-0 before:transition-all before:duration-200 group-hover:before:scale-x-100">
            Search
          </span>
        </a>
        <a href="" className="header-link group text-green-600">
          <CurrencyDollarIcon className="h-4" />
          <span className="relative uppercase text-sm font-medium before:bg-[#f9f9f9] before:rounded-bl before:-bottom-1.5 before:h-0.5 before:inset-x-0 before:absolute before:transform before:origin-left before:scale-x-0 before:transition-all before:duration-200 group-hover:before:scale-x-100">
            Crypto
          </span>
        </a>
        <a href="" className="header-link group text-green-600">
          <StarIcon className="h-4" />
          <span className="relative uppercase text-sm font-medium before:bg-[#f9f9f9] before:rounded-bl before:-bottom-1.5 before:h-0.5 before:inset-x-0 before:absolute before:transform before:origin-left before:scale-x-0 before:transition-all before:duration-200 group-hover:before:scale-x-100">
            Favorites
          </span>
        </a>
      </div>
      <button
        className="ml-auto uppercase border px-4 py-1.5 rounded font medium tracking-wide hover:bg-white hover:text-white transition duration-200"
        onClick={signIn}
      >
        Login
      </button>
    </div>
  );
}
export default Header;
