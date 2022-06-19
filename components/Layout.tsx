import React from "react";
import NavBar from "./NavBar";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="h-screen">
      <div className={`pt-16 h-full bg-slate-100 dark:bg-neutral-900`}>
        <NavBar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
