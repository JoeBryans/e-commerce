import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import * as FaIcons from "react-icons/fa";
import pic from "../assets/shoe.jfif";
import { useDispatch, useSelector } from "react-redux";
import Rating from "../components/rating";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import {
  AddCart,
  DecreaseQty,
  RemoveItem,
  getTotal,
} from "../logic/featurs/slice";
const Cart = () => {
  const userInfo = useSelector((state) => state.products.user);
  const Carts = useSelector((state) => state.products.Carts.cartItems);
  const totalPrice = useSelector((state) => state.products.TotalPrice);
  const search = useLocation();
  const urlRedirect = useSearchParams(search);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(urlRedirect);
  const CheckOut = () => {
    navigate("/shipping");
  };
  // const RemoveItemHandle = (item) => {
  //   dispatch(RemoveItem(item));
  // };  ;

  useEffect(() => {
    dispatch(getTotal());
  }, [totalPrice, Carts, dispatch]);
  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
  }, [userInfo, navigate]);
  return (
    <div>
      <div className="flex w-full flex-col gap-4 p-5 text-slate-700 ">
        {Carts.map((item, index) => {
          return (
            <>
              <div
                key={index}
                className="container my-14 px-1  sm:flex justify-center "
              >
                <img src={item.Image} alt="" className="h-full w-96  border" />
                <div className="flex flex-col sm:mx-4 w-full  sm:w-1/3 shadow-md  relative py-3 text-left px-3 h-fit">
                  <h3>{item.Name}</h3>
                  {/* DisPrice */}
                  <span>Price: ${item.PriceDis}</span>
                  <div className="flex justify-between items-center h-full  w-full flex-wrap ">
                    <div className="flex gap-1 items-center">
                      <span>Quantity:</span>
                      <Button onClick={() => dispatch(AddCart(item))}>
                        <FaIcons.FaPlus className=" font-semibold" />
                      </Button>
                      <span className="text-slate-700 font-bold">
                        {item.Quantity}{" "}
                      </span>
                      <Button onClick={() => dispatch(DecreaseQty(item))}>
                        <FaIcons.FaMinus className=" font-semibold" />
                      </Button>
                    </div>
                  </div>
                  <span>Review: {`${item.Review} (reviews)`}</span>

                  <div className="flex">
                    <span>Rating: </span>
                    <Rating rating={item.Rating} />
                  </div>
                  <p className="my-2 text-slate-700">{item.Description}</p>
                  {/* <div className="flex w-full  justify-between relative bottom-0 p-2">
                {items.Cat === "Rent" ? (
                  <Button variant="danger">+</Button>
                ) : (
                  <Button variant="primary">-</Button>
                )} 
              </div> */}
                  <span>${totalPrice}</span>
                  <Button variant="warning" onClick={CheckOut}>
                    CheckOut
                  </Button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
// const mapdis = (state) => {
//   return {
//     cart: state.allproducts.cart,
//  }  };

//export default connect(mapdis)(Cart);
export default Cart;
