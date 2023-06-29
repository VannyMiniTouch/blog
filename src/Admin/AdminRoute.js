import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import CreateArticle from "./Article/CreateArticle";
import ProtectRoute from "../Auth/ProtectRoute";
import Index from "./Index";

const AdminRoute = () => {
  return (
    <Fragment>
      <ProtectRoute>
        <Routes>
          <Route path="/dashboard" element={<Index />} />
          <Route path="/create-article" element={<CreateArticle />} />
        </Routes>
      </ProtectRoute>
    </Fragment>
  );
};

export default AdminRoute;
