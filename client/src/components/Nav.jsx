import React, { useContext, useEffect, useState } from "react";
import Search from "./Search";
import * as FaIcons from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Dropdown from "./dropdown";
import pic from "../assets/shoe.jfif";
import { useSelector } from "react-redux";
// allproducts
const Nav = () => {
  const [show, setShow] = useState(false);
  const cartItems = useSelector((state) => state.products.Carts.cartItems);
  const user = useSelector((state) => state.products.user);

  const cartItemsLength = cartItems.length === 0;
  //   const navigate = useNavigate();
  console.log(cartItemsLength);
  const handleSearch = () => {
    setShow(!show);
  };
  useEffect(() => {}, [cartItems]);

  return (
    <>
      {/* <div className="bg-slate-600 h-12 w-screen relative  justify-center hidden sm:flex"> */}
      <div className="w-screen relative ">
        <div className="fixed top-0 px-10 w-screen py-1 bg-slate-700 flex item-center justify-around z-40">
          {/* <div className="container  bg-slate-600 flex  items-center  py-2 w-screen"> */}
          <div className=" w-1/3 ">
            <NavLink
              to="/"
              className="text-blue-200 font-mono font-bold flex items-center px-4 mx-36"
            >
              <h3 c> ShopBite</h3>
            </NavLink>
          </div>
          <div className=" w-1/3 flex items-center justify-end relative px-4">
            <Search setShow={setShow} show={show} />
            <FaIcons.FaSearch
              onClick={handleSearch}
              size={30}
              className={show ? "d-none" : "d-lg-flex d-sm-none "}
            />
          </div>
          <div className="flex w-3/4 px-4 items-center  justify-start gap-5 relative left-52 ">
            <Link
              to="/cart"
              className="relative text-slate-200 font-mono hover:text-blue-300 font-semibold flex items-center gap-1"
            >
              <FaIcons.FaShoppingCart size={30} />
              <span
                className={
                  cartItemsLength
                    ? "border-none hidden"
                    : "border rounded-circle w-7 h-7 place-center flex items-center justify-center relative -top-2"
                }
              >
                {user ? <>{cartItems.length}</> : null}
              </span>
            </Link>

            <div className="w-96 relative top-0  text-left">
              {user ? (
                <Dropdown />
              ) : (
                <Link
                  to="/login"
                  className="relative text-slate-200 font-mono hover:text-blue-300 font-semibold flex items-center gap-1"
                >
                  Log In
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-600 h-12 w-screen relative  justify-center flex sm:hidden">
        <div className="container  bg-slate-600 flex  items-center  py-2 w-screen">
          <NavLink
            to="/"
            className="text-blue-200 font-mono font-bold flex items-center px-4"
          >
            <h3 c> ShopBite</h3>
          </NavLink>
          <div className="flex w-2/4  items-center justify-end gap-4 relative  ">
            <NavLink className="text-light hover:text-blue-300" to="/Search">
              {" "}
              <FaIcons.FaSearch size={30} className="d-lg-flex d-sm-none " />
            </NavLink>
            <Link className="relative text-slate-200 font-mono hover:text-blue-300 font-semibold flex items-center gap-1">
              <FaIcons.FaShoppingCart size={30} />
              <span className="border rounded-circle w-7 h-7 place-center flex items-center justify-center relative -top-2">
                0
              </span>
            </Link>

            <NavLink>
              {/* <span>{users}</span> */}
              {/* <span>{user && user.username}</span> */}
              {/* <img src={pic} alt="" className="w-8  z-20 rounded-circle" /> */}
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
