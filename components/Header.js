import Image from "next/image";
import logo from "../images/dubb.png";
import curry from "../images/curry1.gif";
import dame from "../images/Dame.gif";
import {
  HomeIcon,
  CurrencyDollarIcon,
  SearchIcon,
  StarIcon,
} from "@heroicons/react/solid";
import { signIn, useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { GiBasketballJersey } from "react-icons/gi";

function Header() {
  const { data, status, data: session } = useSession();
  const router = useRouter();
  return (
    <header className="sticky bg-[#DB8731] top-0 flex items-center px-10 h-[72px] md:px-12 xl:px-16 ">
      <Image
        src={logo}
        alt="image of a W"
        height={80}
        width={80}
        onClick={() => router.push("/")}
        className="cursor-pointer animate-bounce "
      />

      {session && (
        <div className=" hidden ml-10 md:flex items-center space-x-6">
          <Link href="/">
            <a className="header-link group text-green-600">
              <HomeIcon className="h-4" />
              <span className="relative uppercase text-sm font-medium before:bg-[#660708] before:rounded-bl before:-bottom-1.5 before:h-0.5 before:inset-x-0 before:absolute before:transform before:origin-left before:scale-x-0 before:transition-all before:duration-200 group-hover:before:scale-x-100">
                Home
              </span>
            </a>
          </Link>
          <Link href="/newish">
            <a className="header-link group text-green-600">
              <GiBasketballJersey className="h-4" />
              <span className="relative uppercase text-sm font-medium before:bg-[#660708] before:rounded-bl before:-bottom-1.5 before:h-0.5 before:inset-x-0 before:absolute before:transform before:origin-left before:scale-x-0 before:transition-all before:duration-200 group-hover:before:scale-x-100">
                News
              </span>
            </a>
          </Link>
          <Link
            href="/search
          "
          >
            <a className="header-link group text-green-600">
              <SearchIcon className="h-4" />
              <span className="relative uppercase text-sm font-medium before:bg-[#660708] before:rounded-bl before:-bottom-1.5 before:h-0.5 before:inset-x-0 before:absolute before:transform before:origin-left before:scale-x-0 before:transition-all before:duration-200 group-hover:before:scale-x-100">
                Search
              </span>
            </a>
          </Link>
          <Link href="/crypto">
            <a className="header-link group text-green-600">
              <CurrencyDollarIcon className="h-4" />
              <span className="relative uppercase text-sm font-medium before:bg-[#660708] before:rounded-bl before:-bottom-1.5 before:h-0.5 before:inset-x-0 before:absolute before:transform before:origin-left before:scale-x-0 before:transition-all before:duration-200 group-hover:before:scale-x-100">
                Crypto
              </span>
            </a>
          </Link>
          <Link href="/favorites">
            <a className="header-link group text-green-600">
              <StarIcon className="h-4" />
              <span className="relative uppercase text-sm font-medium before:bg-[#660708] before:rounded-bl before:-bottom-1.5 before:h-0.5 before:inset-x-0 before:absolute before:transform before:origin-left before:scale-x-0 before:transition-all before:duration-200 group-hover:before:scale-x-100">
                Favorites
              </span>
            </a>
          </Link>
        </div>
      )}

      {status === "authenticated" ? (
        <>
          <button
            className="ml-auto uppercase border px-4 py-1.5 rounded font-md tracking-wide hover:bg-white hover:text-white transition duration-200"
            onClick={signOut}
          >
            SignOut
          </button>
          <div className=" mr-0 px-4 ">
            <Image
              src={session.user.image}
              height={50}
              width={50}
              alt="pic"
              className="rounded-full  px-3 mx-5 object-right"
            />
          </div>
        </>
      ) : (
        <>
          <button
            className="ml-auto uppercase border px-4 py-1.5 rounded font-md tracking-wide hover:bg-white hover:text-white transition duration-200"
            onClick={signIn}
          >
            Login
          </button>

          {/* <Image src={session.image} alt="" /> */}
        </>
      )}
    </header>
  );
}
export default Header;
