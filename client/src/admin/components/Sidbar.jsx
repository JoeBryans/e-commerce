import React, { useState } from "react";
import style from "./adminCom.module.css";
import { Button, NavItem, NavLink, Navbar, NavbarBrand } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as Aicons from "react-icons/ai";
import * as MdIcons from "react-icons/md";

const Sidbar = () => {
  const [slide, setSlide] = useState(false);
  const slider = () => setSlide(!slide);
  return (
    <>
      <FaIcons.FaBars
        id={style.Bar}
        size={30}
        className="text-primary "
        style={{ zIndex: "50" }}
        onClick={slider}
      />
      <div className={slide ? style.Sidebar : style.Closebar}>
        <div className={style.Navbar}>
          <Navbar id={style.Nav}>
            {/* <NavbarBrand>Dashboard</NavbarBrand> */}
            <NavItem id={style.NavItem}>
              <Link to="/admin/Dashboard">
                <MdIcons.MdDashboard />
                Dashboard
              </Link>
            </NavItem>
            <NavItem id={style.NavItem}>
              <Link to="/admin/Products">
                <MdIcons.MdAddShoppingCart /> Products
              </Link>
            </NavItem>
            <NavItem id={style.NavItem}>
              <Link to="/admin/Orders">
                <FaIcons.FaAddressCard />
                Orders
              </Link>
            </NavItem>
            <NavItem id={style.NavItem}>
              <Link to="/admin">
                <FaIcons.FaUser /> Users
              </Link>
            </NavItem>
            <NavItem id={style.NavItem}>
              <Link to="/admin">
                <FaIcons.FaCreditCard /> Payments
              </Link>
            </NavItem>
            <NavItem id={style.NavItem}>
              <Link to="/admin">
                <MdIcons.MdProductionQuantityLimits />
                Revenue
              </Link>
            </NavItem>
          </Navbar>
        </div>
      </div>
      {/* <div className={style.Mode}>
        <Button variant="dark">Dark</Button>
        <Button variant="light">Light</Button>
      </div> */}
    </>
  );
};

export default Sidbar;
