import React from "react";
import { useAuth } from "./AuthProvider";
// import AppLayout from "../AppLayout";

const Register = () => {
  const { name } = useAuth();
  return (
    <>
      {/* <AppLayout> */}
      <div>Register</div>
      <h1>{name}</h1>
      {/* </AppLayout>  */}
    </>
  );
};

export default Register;
