import { useRouter } from "next/router";
import React from "react";

interface Props {
  title: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  rounded?: boolean;
  path?: string;
}

const NavBarIcon = ({ title, Icon, rounded, path }: Props) => {
  const { pathname } = useRouter();
  if (rounded) {
    return (
      <div
        title={title}
        className="w-10 h-10 rounded-full bg-gray-200 grid place-items-center cursor-pointer hover:bg-gray-100 dark:bg-neutral-700 dark:hover:bg-neutral-600"
      >
        <Icon className="w-6 text-black dark:text-white" />
      </div>
    );
  }
  return (
    <div
      title={title}
      className={`w-32 h-11 rounded grid place-items-center cursor-pointer dark:hover:bg-neutral-700 ${
        path === pathname ? "border-b-4 border-blue-500" : ""
      } hover:bg-gray-100`}
    >
      <Icon
        className={`w-7 ${
          path === pathname ? "text-blue-500" : "text-gray-500"
        }`}
      />
    </div>
  );
};

export default NavBarIcon;
