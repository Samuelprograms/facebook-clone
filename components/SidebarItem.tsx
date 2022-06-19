import React, { Dispatch } from "react";

interface Props {
	title: string;
	Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	image?: {
		src: string;
		alt?: string;
	};
	onClick?: any;
}

const SidebarItem = ({ title, Icon, image, onClick }: Props) => {
	return (
		<div
			onClick={onClick}
			className="flex items-center hover:bg-neutral-200 px-3 py-2 space-x-2 cursor-pointer rounded-lg dark:hover:bg-neutral-800"
		>
			{image && (
				<img className="rounded-full w-8" src={image.src} alt={image.alt} />
			)}
			{Icon && <Icon className="w-8 text-blue-600" />}
			<span className="font-semibold text-black dark:text-white">{title}</span>
		</div>
	);
};

export default SidebarItem;
