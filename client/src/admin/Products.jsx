import React, { useEffect, useState } from "react";
import style from "./admin.module.css";
import { Button, Container } from "react-bootstrap";
import * as FaIcons from "react-icons/fa";
// import house from "../assets/01-1-768x425.jpg";
import { Link } from "react-router-dom";
import Sidbar from "./components/Sidbar";
import axios from "axios";

const AllProduct = () => {
  const [allproduct, setAllproduct] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const respons = await axios.get(
          "http://localhost:5000/products/allProducts"
        );
        setAllproduct((await respons).data);
      } catch (error) {}
    };
    fetch();
  }, []);
  return (
    <div className={style.Dashbord}>
      <Container className="d-flex align-items-center flex-column">
        <div className={style.productNav}>
          <h2>Products</h2>
          <Button>
            <Link to="/admin/Add">Create</Link>
          </Button>
        </div>
        {allproduct.map((item) => {
          return (
            <div className={style.Products}>
              <img src={item.Cover} alt="" />
              <div className={style.items}>
                <h3>{item.Name}</h3>
                <div className="d-flex gap-4">
                  <p className={style.price}>₦{item.Price}</p>
                  <p>₦{item.DisPrice}</p>
                </div>
                <span>{item.Description}</span>
              </div>
              <div className={style.btn}>
                <Link to={`/admin/edit/${item._id}`}>
                  <FaIcons.FaEdit style={{ color: "blue" }} size={30} />
                </Link>
                <Link>
                  <FaIcons.FaTrash style={{ color: "red" }} size={30} />
                </Link>
              </div>
            </div>
          );
        })}
      </Container>
    </div>
  );
};

export default AllProduct;
