import React from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { Button } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import { useSelector } from "react-redux";
const Navs = () => {
  const user = useSelector((state) => state.products.user);

  const LogOutHandle = () => {
    localStorage.clear("user");
  };
  return (
    <div className="w-screen relative z-40">
      <div className="fixed top-0 w-screen py-1 bg-slate-700 flex item-center justify-around">
        <div className="logo">
          <Link>
            <h2>ShopBite</h2>
          </Link>{" "}
        </div>
        <div className="my-2">
          <Link className="text-slate-50">
            <FaIcons.FaSearch size={30} />
          </Link>
        </div>
        <div className="text-slate-50">
          <DropdownButton
            id="dropdown-basic-button"
            variant="primary"
            // className="text-slate-50"
            title={user?.username}
          >
            <Dropdown.Item>
              <Link>Client View</Link>
            </Dropdown.Item>
            {/* <Dropdown.Item>
              <Link></Link> 
            </Dropdown.Item>*/}
            <Dropdown.Item>
              <Link onClick={LogOutHandle}>LogOut</Link>
            </Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
    </div>
  );
};

export default Navs;
