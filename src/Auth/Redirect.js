import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Redirect = ({ children }) => {
  const navigate = useNavigate();
  const token = window.localStorage.getItem("token");
  const IsAdmin = window.localStorage.getItem("IsAdmin");
  useEffect(() => {
    token 
      ? IsAdmin
        ? navigate("/admin/dashboard")
        : navigate("/")
      : navigate("/login");

  }, [navigate, token, IsAdmin]);
  return children;
};
export default Redirect;
