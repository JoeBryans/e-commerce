import React, { useContext, useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Rating from "../components/rating";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Fitter from "../components/Fitter";
import Banner from "../components/Banner";
import { AddCart } from "../logic/featurs/slice";
import axios from "axios";
const Shop = () => {
  const [product, setProduct] = useState([]);
  const Products = useSelector((state) => state.products.product);
  const userInfo = useSelector((state) => state.products.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //
  const ADD = (items) => {
    if (!userInfo) {
      navigate("/login");
    } else {
      dispatch(AddCart(items));
    }
  };
  const fecthPro = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/products/all_Product"
      );
      setProduct(data);
    } catch (error) {}
  };
  useEffect(() => {
    fecthPro();
  }, [product]);

  return (
    <>
      <div className="home  ">
        {/* <Banner /> */}
        <div className="flex justify-center gap-10 ">
          <Fitter></Fitter>
          <div className=" Products ">
            {Products &&
              Products.map((items, i) => {
                return (
                  <div key={i} className="product rounded top-4">
                    <Link to={`/product-details/${items._id}`}>
                      <img className="product-cover" src={items.Image} alt="" />
                    </Link>
                    <Link to={`/product-details/${items._id}`}>
                      <h5 className="product-title text-dark">{items.Title}</h5>
                    </Link>
                    <div className="deals">
                      <Button variant="outline-primary">20% off</Button>{" "}
                      <span className="text-primary">Deal</span>
                    </div>
                    <div className="price-flex">
                      <span>${items.Price}</span>
                      <span>${items.DisPrice}</span>
                    </div>
                    <div className="flex flex-col text-left ">
                      <span>{`${items.Review}(reviews)`}</span>
                      <Rating rating={items.Rating} />
                    </div>
                    <Button
                      style={{ width: "100%", marginTop: "5px" }}
                      variant="outline-primary"
                      onClick={() => ADD(items)}
                    >
                      Add
                    </Button>{" "}
                    {/* <div className="catLink">
                  <Link>see more...</Link>
            </div> */}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
