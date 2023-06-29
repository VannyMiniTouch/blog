// import React, { useEffect, useState } from "react";
// import { Navigate } from "react-router-dom";

// const ProtectRoute = ({ children }) => {
//   const { token, setToken } = useState(window.localStorage.getItem("token"));
//   useEffect(() => {
//     if (!token) {
//       // link to login page
//       //   window.location.href = "/login";
//       console.log("here");
//       <Navigate to="/login" />;
//     }
//   }, [token]);
//   return children ;
// };

// export default ProtectRoute;

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectRoute = ({ children }) => {
  const navigate = useNavigate();
  const token = window.localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [navigate, token]);
  return children;
};

export default ProtectRoute;
