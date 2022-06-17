import React, { useState } from "react";
import NavBarIcon from "./NavBarIcon";
import {
  BellIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
  HomeIcon,
  MailIcon,
  MenuIcon,
  PlayIcon,
  PuzzleIcon,
  SearchIcon,
  ShoppingBagIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import { useSession } from "next-auth/react";
import NavbarMenu from "./NavbarMenu";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { data } = useSession();

  return (
    <div className="flex fixed top-0 w-full justify-between px-3 bg-white py-1 shadow-md dark:bg-neutral-800">
      {/* Left */}
      <div className="flex items-center space-x-3 cursor-pointer">
        <Link href="/">
          <img
            className="h-10"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"
            alt=""
          />
        </Link>
        <div className="flex items-center justify-center bg-gray-100 px-3 py-2 rounded-full space-x-2 dark:bg-neutral-700">
          <SearchIcon className="text-gray-500 w-5 dark:text-gray-400" />
          <input
            type="text"
            placeholder="Search Facebook"
            className="hidden xl:inline-flex bg-transparent outline-none dark:text-white"
          />
        </div>
        <MenuIcon className="w-8 text-gray-500 md:hidden" />
      </div>
      {/* Center */}
      <div className="hidden lg:flex space-x-2">
        <NavBarIcon title="Home" Icon={HomeIcon} path="/" />
        <NavBarIcon title="Watch" Icon={PlayIcon} />
        <NavBarIcon title="MarketPlace" Icon={ShoppingBagIcon} />
        <NavBarIcon title="Communities" Icon={UserGroupIcon} />
        <NavBarIcon title="Gamming" Icon={PuzzleIcon} />
      </div>
      {/* Right */}
      <div className="flex items-center space-x-4 ">
        <div className="hidden xl:flex items-center cursor-pointer space-x-1 hover:bg-gray-100 rounded-full p-1 pr-2 dark:hover:bg-neutral-600">
          <img
            className="h-7 rounded-full"
            src={data?.user?.image || ""}
            alt=""
          />
          <span className="font-semibold dark:text-white">
            {data?.user?.name?.split(" ")[0]}
          </span>
        </div>
        <div className="flex space-x-3">
          <NavBarIcon
            title="Gamming"
            Icon={DotsHorizontalIcon}
            rounded={true}
          />
          <NavBarIcon title="Gamming" Icon={MailIcon} rounded={true} />
          <NavBarIcon title="Gamming" Icon={BellIcon} rounded={true} />
          <NavBarIcon
            title="Gamming"
            Icon={ChevronDownIcon}
            rounded={true}
            onClick={() => setShowMenu(!showMenu)}
          />
          {showMenu && <NavbarMenu />}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
