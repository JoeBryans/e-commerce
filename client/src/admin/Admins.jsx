import React from "react";
import { Outlet } from "react-router-dom";
import Sidbar from "./components/Sidbar";
import Nav from "./components/nav";

const Admins = () => {
  return (
    <div>
      <Nav />
      <Sidbar />

      <Outlet />
    </div>
  );
};

export default Admins;
