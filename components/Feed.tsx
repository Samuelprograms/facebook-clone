import React from "react";
import Post from "./Post";

interface Props {
  data: object[];
}

const Feed = ({ data }: Props) => {
  return (
    <div className="space-y-4 h-full overflow-y-scroll">
      {data.map((item: object, index: number) => (
        <Post key={index} data={item} />
      ))}
    </div>
  );
};

export default Feed;
