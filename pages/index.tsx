import {
  SaveIcon,
  UserGroupIcon,
  PlayIcon,
  ClockIcon,
  UsersIcon,
  FlagIcon,
  CalendarIcon,
  TrendingUpIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/solid";
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import SidebarItem from "../components/SidebarItem";
import useTheme from "../Hooks/useTheme";

const Home: NextPage = () => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const { toogleTheme } = useTheme();
  return (
    <div className="grid grid-cols-3 h-full">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Left */}
      <div className="max-w-sm px-3 pb-3 h-full overflow-y-scroll">
        <button onClick={() => toogleTheme()}>toggle</button>
        <SidebarItem
          title="Samuel Cerón"
          image={{
            src: "https://scontent.fbog19-1.fna.fbcdn.net/v/t39.30808-1/278908693_533230835094989_3204616946964746643_n.jpg?stp=dst-jpg_p160x160&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeGCAok6fn4T4P8Oe36PL1EkQkf-IK4QOgNCR_4grhA6Ayj2lfWJEMY21duyVfQ0213tH4e_uHGJqQE1nhdjCM52&_nc_ohc=4amdClM5v44AX8Yimue&_nc_ht=scontent.fbog19-1.fna&oh=00_AT_zPBlCCp_gQoJUtr9EtEKOLTh4frZJjiwRQ7svVQeI3A&oe=62B1B5BE",
          }}
        />
        <SidebarItem title="Friends" Icon={UserGroupIcon} />
        <SidebarItem title="Saved" Icon={SaveIcon} />
        <SidebarItem title="Watch" Icon={PlayIcon} />
        <SidebarItem title="Memories" Icon={ClockIcon} />
        <SidebarItem title="Communities" Icon={UsersIcon} />
        <SidebarItem title="Pages" Icon={FlagIcon} />
        <SidebarItem title="Events" Icon={CalendarIcon} />
        <SidebarItem title="Most Recent" Icon={TrendingUpIcon} />
        {showMore && (
          <>
            <SidebarItem title="Friends" Icon={UserGroupIcon} />
            <SidebarItem title="Friends" Icon={UserGroupIcon} />
            <SidebarItem title="Friends" Icon={UserGroupIcon} />
            <SidebarItem title="Friends" Icon={UserGroupIcon} />
            <SidebarItem title="Friends" Icon={UserGroupIcon} />
            <SidebarItem title="Friends" Icon={UserGroupIcon} />
            <SidebarItem title="Friends" Icon={UserGroupIcon} />
            <SidebarItem title="Friends" Icon={UserGroupIcon} />
            <SidebarItem title="Friends" Icon={UserGroupIcon} />
            <SidebarItem title="Friends" Icon={UserGroupIcon} />
            <SidebarItem title="Friends" Icon={UserGroupIcon} />
            <SidebarItem title="Friends" Icon={UserGroupIcon} />
            <SidebarItem title="Friends" Icon={UserGroupIcon} />
            <SidebarItem title="Friends" Icon={UserGroupIcon} />
            <SidebarItem title="Friends" Icon={UserGroupIcon} />
          </>
        )}
        <SidebarItem
          title={`Show ${showMore ? "Less" : "More"}`}
          Icon={showMore ? ChevronUpIcon : ChevronDownIcon}
          onClick={() => setShowMore(!showMore)}
        />
      </div>
      {/* Center */}
      <div>center</div>
      {/* Right */}
      <div>right</div>
    </div>
  );
};

export default Home;
