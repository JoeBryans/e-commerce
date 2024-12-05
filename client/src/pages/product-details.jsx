import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
// import { Products } from "./Data";
import Rating from "../components/rating";
import { useDispatch, useSelector } from "react-redux";
import { AddCart } from "../logic/featurs/slice";

const ProductDetails = ({ addcart }) => {
  const Products = useSelector((state) => state.products.product);
  const dispatch = useDispatch();
  const params = useParams();
  const { _id } = params;
  const product = Products.find((x) => x._id === params._id);
  const ADD = (items) => {
    dispatch(AddCart(items));
  };
  return (
    <>
      <div className="w-screen py-24 text-center flex justify-center ">
        <div className="flex w-2/4 justify-center  text-slate-500 ">
          <div className="w-full flex justify-center">
            <div className="  p-3 rounded-lg">
              <img className="h-96 w-96" src={product.Image} alt="" />
            </div>
          </div>
          <div className="flex flex-col items-start w-full  p-3 rounded-lg h-fit gap-2 text-left">
            <div className="flex justify-between  my-2">
              <span className="font-bold">{product.Name}</span>
            </div>
            <span
              className="font-bold"
              style={{ textDecoration: "line-through" }}
            >
              Price: ${product.Price}
            </span>

            <span className="font-bold">Discount:${product.DisPrice}</span>
            <span>Review {product.Review}</span>
            <Rating rating={product.Rating} />
            <span className="font-bold">Instock : {product.Instouck}</span>

            <div className="w-96 text-justify my-2">
              <span>
                {product.Description +
                  "            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, aperiam cupiditate! A sed dolores harum?"}
              </span>
            </div>
            <Button variant="primary w-full my-4" onClick={ADD(product)}>
              Add To Cart
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
