import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Wiki from "./pages/Wiki";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/wiki" element={<Wiki />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
