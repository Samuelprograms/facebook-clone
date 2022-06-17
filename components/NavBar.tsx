import React from "react";
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

const NavBar = () => {
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
            src="https://scontent.fbog19-1.fna.fbcdn.net/v/t39.30808-1/278908693_533230835094989_3204616946964746643_n.jpg?stp=dst-jpg_p160x160&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeGCAok6fn4T4P8Oe36PL1EkQkf-IK4QOgNCR_4grhA6Ayj2lfWJEMY21duyVfQ0213tH4e_uHGJqQE1nhdjCM52&_nc_ohc=4amdClM5v44AX8Yimue&_nc_ht=scontent.fbog19-1.fna&oh=00_AT_zPBlCCp_gQoJUtr9EtEKOLTh4frZJjiwRQ7svVQeI3A&oe=62B1B5BE"
            alt=""
          />
          <span className="font-semibold dark:text-white">Samuel</span>
        </div>
        <div className="flex space-x-3">
          <NavBarIcon
            title="Gamming"
            Icon={DotsHorizontalIcon}
            rounded={true}
          />
          <NavBarIcon title="Gamming" Icon={MailIcon} rounded={true} />
          <NavBarIcon title="Gamming" Icon={BellIcon} rounded={true} />
          <NavBarIcon title="Gamming" Icon={ChevronDownIcon} rounded={true} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
