import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import pic from "../assets/shoe.jfif";
import { useDispatch } from "react-redux";
import { LogOut } from "../logic/featurs/slice";

const Dropdown = () => {
  const [dropDown, setDropDown] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const currentUser = user?.user;
  const Dropdown = () => {
    setDropDown(!dropDown);
  };

  const LogoutHandle = () => {
    dispatch(LogOut());
    navigate("/");
    setDropDown(false);
  };

  return (
    <div className="absolute -top-5 mx-5 z-20">
      {/* <img
        src={pic}
        alt=""
        className="w-10   z-20 rounded-circle"
        onClick={Dropdown}
      /> */}
      <span
        className="relative text-white top-2 font-semibold capitalize"
        onClick={Dropdown}
      >
        {user && user?.username}
      </span>

      <div
        className={
          dropDown
            ? "flex flex-col justify-center items-start px-4  bg-slate-600 rounded gap-2 py-3  font-semibold font-mono"
            : " bg-red-600 hidden"
        }
      >
        <Link to="" className="text-light hover:text-blue-300 ">
          Orders
        </Link>
        <Link to="" className="text-light hover:text-blue-300 flex gap-2">
          Messages <span className="">12</span>
        </Link>
        <Link to="" className="text-light hover:text-blue-300 ">
          Saved Items
        </Link>
        <Link to="" className="text-light hover:text-blue-300 ">
          Recently Viewed
        </Link>
        <Link to="" className="text-light hover:text-blue-300 ">
          Ratings & Reviews
        </Link>
        <Link to="" className="text-light hover:text-blue-300 ">
          Profile
        </Link>
        <Link
          to=""
          className="text-light hover:text-blue-300 "
          onClick={LogoutHandle}
        >
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Dropdown;
