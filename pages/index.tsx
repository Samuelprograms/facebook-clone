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
import { getSession } from "next-auth/react";
import Head from "next/head";
import { useState } from "react";
import Feed from "../components/Feed";
import SidebarItem from "../components/SidebarItem";
import { shuffleArray } from "../utils/arrayUtils";

interface Props {
  user: {
    name: string;
    email: string;
    image: string;
  };
  data: object[];
}

const Home = ({ user, data }: Props) => {
  const [showMore, setShowMore] = useState<boolean>(false);
  return (
    <div className="grid grid-cols-1 h-full md:grid-cols-2 lg:grid-cols-3">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Left */}
      <div className="hidden md:inline-block max-w-sm px-3 pb-3 h-full overflow-y-scroll">
        <SidebarItem
          title={user.name}
          image={{
            src: `${user.image}`,
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
      <Feed data={data} />
      {/* Right */}
      <div className="hidden lg:inline-block">right</div>
    </div>
  );
};

export default Home;

export const getServerSideProps = async ({ req }: any) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  const data = await response.json();
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    };
  }
  return {
    props: {
      user: session.user,
      data: shuffleArray(data.slice(0, 100)),
    },
  };
};
