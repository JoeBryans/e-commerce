import React, { useEffect } from "react";
import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import * as FaIcons from "react-icons/fa";

import { useSelector } from "react-redux";
import axios from "axios";
const PayButton = () => {
  const cartItems = useSelector((state) => state.products.Carts.cartItems);
  const userInfo = useSelector((state) => state.products.user);
  const ShippingInfo = useSelector(
    (state) => state.products.Carts.shippingAdress
  );

  const handleCheckout = async (e) => {
    e.preventDefault();

    const product = cartItems;

    const headers = {
      "Content-Type": "application/json",
    };
    await axios
      .post("http://localhost:5000/strip", {
        // product,
        // userId: userInfo._id,
      })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
        console.log(res.data);
      })
      .catch((err) => console.log(err));
    console.log(JSON.stringify(product));
    console.log(product);
  };
  useEffect(() => {}, []);

  return (
    <div>
      <Container>
        <div className="flex relative justify-between top-10">
          <div className="w-2/4">
            <Row>
              <Col max={8}>
                <Card>
                  <CardBody>
                    <CardTitle>Shipping</CardTitle>
                    <CardText className="flex flex-col text-left">
                      <span>
                        <b>Name:</b>
                        {ShippingInfo.fullName}
                      </span>
                      <span>
                        {" "}
                        <b>Tel:</b>
                        {ShippingInfo.phone}
                      </span>
                      {/* <b>Email:{ShippingInfo.email}</b> */}
                      <span>
                        {" "}
                        <b>Address:</b>
                        {ShippingInfo.address},{ShippingInfo.country},
                        {ShippingInfo.city}
                      </span>
                    </CardText>
                    <Link className="flex gap-2 items-center" to="/shipping">
                      Edit{" "}
                      <FaIcons.FaEdit className="text-blue-600" size={20} />
                    </Link>
                  </CardBody>
                </Card>
              </Col>{" "}
            </Row>
          </div>
        </div>
        <Button onClick={handleCheckout}>Payment</Button>
      </Container>{" "}
    </div>
  );
};

export default PayButton;
