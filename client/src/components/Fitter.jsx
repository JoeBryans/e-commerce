import React from "react";
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";
import FormCheckLabel from "react-bootstrap/esm/FormCheckLabel";

const Fitter = () => {
  return (
    <div className="relative  w-96 mx-4 top-48">
      <div
        className=" sticky top-0  w-72 border  rounded text-black text-left"
        style={{ height: "70%" }}
      >
        <div className="w-full bg-slate-700 px-3 py-1 ">
          <h4 className="bg-slate-700 text-white w-"> Products Categories</h4>
        </div>
        <div className="flex flex-col gap-3 px-3 py-4">
          <label htmlFor="" className="flex gap-3">
            <input type="checkbox" name="" id="" />
            <span>All Products</span>
          </label>
          <label htmlFor="" className="flex gap-3">
            <input type="checkbox" name="" id="" />
            <span>Fashion</span>
          </label>{" "}
          <label htmlFor="" className="flex gap-3">
            <input type="checkbox" name="" id="" />
            <span>Electronics</span>
          </label>{" "}
          <label htmlFor="" className="flex gap-3">
            <input type="checkbox" name="" id="" />
            <span>Office & Home</span>
          </label>{" "}
          <label htmlFor="" className="flex gap-3">
            <input type="checkbox" name="" id="" />
            <span>Phone, Tablet & Accessories</span>
          </label>{" "}
          <label htmlFor="" className="flex gap-3">
            <input type="checkbox" name="" id="" />
            <span>Computer & Accessories</span>
          </label>{" "}
          <label htmlFor="" className="flex gap-3">
            <input type="checkbox" name="" id="" />
            <span>Kids Toys</span>
          </label>{" "}
          <label htmlFor="" className="flex gap-3">
            <input type="checkbox" name="" id="" />
            <span>Books & Media</span>
          </label>{" "}
          <label htmlFor="" className="flex gap-3">
            <input type="checkbox" name="" id="" />
            <span>Automobile</span>
          </label>{" "}
          <label htmlFor="" className="flex gap-3">
            <input type="checkbox" name="" id="" />
            <span>Drinks & Groceries</span>
          </label>{" "}
        </div>
      </div>
    </div>
  );
};

export default Fitter;
