import "./App.css";
import { Route, Routes } from "react-router-dom";
import AuthProvider from "./Auth/AuthProvider";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Home from "./Home";
import AdminRoute from "./Admin/AdminRoute";
import Redirect from "./Auth/Redirect";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={  <Redirect><Login /></Redirect> } />
        <Route path="/admin/*" element={<AdminRoute />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
