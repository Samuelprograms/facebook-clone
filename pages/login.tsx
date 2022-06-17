import React from "react";
import { NextPageContext } from "next";
import { getSession, signIn } from "next-auth/react";

const Login = () => {
  return <button onClick={() => signIn("facebook")}> login</button>;
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
