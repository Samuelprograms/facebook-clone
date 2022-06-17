import {
  ArrowRightIcon,
  ChatIcon,
  ThumbUpIcon,
} from "@heroicons/react/outline";
import React from "react";

const Post = ({ data: { url, thumbnailUrl, title } }: any) => {
  return (
    <div className="space-y-3">
      <div className="flex items-center space-x-3">
        <img className="rounded-full w-10" src={thumbnailUrl} alt="" />
        <h2 className="text-black dark:text-white">{title}</h2>
      </div>
      <img src={url} alt="" />
      <div className=" grid grid-cols-3 border-y-2 py-1 dark:border-neutral-700">
        <div className="flex items-center justify-center py-2 space-x-2 rounded-sm cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700">
          <ThumbUpIcon className="w-6 text-neutral-500 dark:text-neutral-400" />
          <span className="font-semibold text-neutral-500 dark:text-neutral-400">
            Like
          </span>
        </div>
        <div className="flex items-center justify-center py-2 space-x-2 rounded-sm cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700">
          <ChatIcon className="w-6 text-neutral-500 dark:text-neutral-400" />
          <span className="font-semibold text-neutral-500 dark:text-neutral-400">
            Comment
          </span>
        </div>
        <div className="flex items-center justify-center py-2 space-x-2 rounded-sm cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700">
          <ArrowRightIcon className="w-6 text-neutral-500 dark:text-neutral-400" />
          <span className="font-semibold text-neutral-500 dark:text-neutral-400">
            Share
          </span>
        </div>
      </div>
    </div>
  );
};

export default Post;
