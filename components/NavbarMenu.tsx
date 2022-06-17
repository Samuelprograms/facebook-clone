import { LogoutIcon, MoonIcon, SunIcon } from "@heroicons/react/solid";
import { signOut } from "next-auth/react";
import React from "react";
import useTheme from "../Hooks/useTheme";
import SidebarItem from "./SidebarItem";

const NavbarMenu = () => {
  const { isDarkTheme, toogleTheme } = useTheme();
  return (
    <div className="absolute right-0 top-12  bg-white dark:bg-neutral-800 p-2 space-y-2">
      <SidebarItem
        title="Theme"
        Icon={isDarkTheme ? SunIcon : MoonIcon}
        onClick={() => toogleTheme()}
      />
      <SidebarItem title="Logout" Icon={LogoutIcon} onClick={() => signOut()} />
    </div>
  );
};

export default NavbarMenu;
