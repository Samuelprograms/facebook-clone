import React from "react";
import { NextPageContext } from "next";
import { getSession, signIn } from "next-auth/react";

const Login = () => {
	return (
		<div className="w-full h-full grid place-items-center">
			<button
				className="bg-blue-500 px-4 py-2 rounded-full text-white font-bold uppercase"
				onClick={() => signIn("facebook")}
			>
				{" "}
				login
			</button>
		</div>
	);
};

export default Login;

export const getServerSideProps = async ({ req }: NextPageContext) => {
	const session = await getSession({ req });
	if (session) {
		return {
			redirect: {
				permanent: false,
				destination: "/",
			},
		};
	}
	return {
		props: {},
	};
};
