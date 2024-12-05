import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Navs from "./admin/components/nav";
import { useSelector } from "react-redux";

const Layout = () => {
  const user = useSelector((state) => state.products.user);
  const role = user?.Role;
  const isSeller = role === "seller";

  return (
    <div>
      {/* {isSeller ? <Navs /> : <Nav />} */}
      <Nav />
      <Outlet />
    </div>
  );
};

export default Layout;
