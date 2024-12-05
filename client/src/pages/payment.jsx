import React, { useEffect, useState } from "react";
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

import axios from "axios";
import PaystackPop from "@paystack/inline-js";
import CheckOutSteps from "../components/CheckoutStep";
import { useSelector } from "react-redux";
import PayButton from "../components/PayButton";
const Payments = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [phone, setPhone] = useState("");
  const ShippingInfo = useSelector(
    (state) => state.products.Carts.shippingAdress
  );
  const userInfo = useSelector((state) => state.products.user);

  const navigate = useNavigate();

  useEffect(() => {
    if (!ShippingInfo) {
      navigate("/shipping");
    }
    if (!userInfo) {
      navigate("/login");
    }
  }, [ShippingInfo, userInfo, navigate]);

  const handleCheckout = (e) => {
    e.preventDefault();

    //   const paystack = new PaystackPop();
    //   paystack.newTransaction({
    //     key: "pk_test_7435d79f5c0e3eff46b909745d4c4e105bec2b81",
    //     username,
    //     email,
    //     amount: amount * 100,
    //     phone,
    //   });
  };
  return (
    <div className=" w-screen  h-dvh relative top-20">
      <CheckOutSteps step1 step2 step3 />
      <div
        className="flex w-screen justify-center top-10 relative "
        style={{ height: "100%" }}
      >
        <Container>
          <div className="flex  relative  justify-center ">
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
    </div>
  );
};

export default Payments;
