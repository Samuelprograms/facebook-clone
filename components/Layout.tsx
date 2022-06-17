import React from "react";
import NavBar from "./NavBar";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className={`h-screen`}>
      <NavBar />
      <div className="pt-16 h-screen bg-white dark:bg-neutral-900">
        {children}
      </div>
    </div>
  );
};

export default Layout;
