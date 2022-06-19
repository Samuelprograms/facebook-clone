import {
	ArrowRightIcon,
	CameraIcon,
	ChatIcon,
	EmojiHappyIcon,
	ThumbUpIcon,
} from "@heroicons/react/outline";
import { useSession } from "next-auth/react";
import React from "react";

const Post = ({ data: { url, thumbnailUrl, title } }: any) => {
	const { data } = useSession();
	return (
		<div className="items-center space-y-3 bg-white dark:bg-neutral-800 rounded-lg py-4">
			<div className="flex items-center space-x-3 px-4">
				<img
					className="rounded-full w-10 cursor-pointer"
					src={thumbnailUrl}
					alt=""
				/>
				<h2 className="text-black dark:text-white">{title}</h2>
			</div>
			<img src={url} alt="" className="object-cover w-full" />
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
			<div className="flex items-center justify-between space-x-2 px-4 ">
				<img src={data?.user?.image} alt="" className="rounded-full w-8" />
				<div className="flex flex-1 bg-neutral-100 px-4 py-2 rounded-full dark:bg-neutral-700 dark:text-white">
					<input
						type=""
						className="bg-transparent w-full outline-none"
						placeholder="Write a comment..."
					/>
					<EmojiHappyIcon className="w-6 text-neutral-400" />
					<CameraIcon className="w-6 text-neutral-400" />
				</div>
			</div>
		</div>
	);
};

export default Post;
