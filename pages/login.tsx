import { signIn, signOut, useSession } from "next-auth/react";
import React, { useEffect } from "react";

const Login = () => {
  const { data: session } = useSession();
  useEffect(() => {
    console.log(session);
  }, []);

  return (
    <>
      <button onClick={() => signIn("facebook")}> login</button>;
      <button onClick={() => signOut()}> logout</button>;
    </>
  );
};

export default Login;
