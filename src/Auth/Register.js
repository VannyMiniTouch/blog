import React from "react";
import { useAuth } from "./AuthProvider";

const Register = () => {
  const { name } = useAuth();
  return (
    <>
      <div>Register</div>
      <h1>{name}</h1>
    </>
  );
};

export default Register;
