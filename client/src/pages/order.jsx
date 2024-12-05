import React, { useEffect, useState } from "react";
import CheckOutSteps from "../components/CheckoutStep";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { getTotal } from "../logic/featurs/slice";
import axios from "axios";
import PaystackPop from "@paystack/inline-js";

const Order = () => {
  const [order, setOrder] = useState({});
  const userInfo = useSelector((state) => state.products.user);

  const param = useParams();
  const { id } = param;
  useEffect(() => {
    const fecthPro = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/order/${id}`);
        setOrder(data);
        console.log(data);
      } catch (error) {}
    };

    fecthPro();
  }, []);
  console.log(order);

  const handlePayment = (e) => {
    e.preventDefault();
    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: "pk_test_7435d79f5c0e3eff46b909745d4c4e105bec2b81",
      username: order.shippingAddress.fullName,
      email: userInfo.email,
      amount: order.totalPrice * 100,
      phone: order.shippingAddress.phone,
    });
  };
  return (
    <div className=" w-screen  h-dvh relative top-20 text-slate-700">
      <h1>order: {id}</h1>
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
                        {order.shippingAddress?.fullName}
                      </span>
                      <span>
                        {" "}
                        <b>Tel:</b>
                        {order.shippingAddress?.phone}
                      </span>
                      {/* <b>Email:{shippingAdress.email}</b> */}
                      <span>
                        {" "}
                        <b>Address:</b>
                        {order.shippingAddress?.address},
                        {order.shippingAddress?.country},
                        {order.shippingAddress?.city}
                      </span>
                    </CardText>
                    {order.delivered ? (
                      <div className="bg-green-700 py-3">
                        Delivered at:{order.delivered_time}
                      </div>
                    ) : (
                      <div className="bg-red-400 py-3 px-1 text-left">
                        Not Delivered
                      </div>
                    )}
                  </CardBody>
                </Card>

                <Card className="relative top-2">
                  <CardBody>
                    <CardTitle>Payment</CardTitle>
                    <CardText className="flex flex-col text-left">
                      <span>
                        {" "}
                        <b>Method:</b>
                        {order.paymenMethod},
                      </span>
                    </CardText>
                    {order.paid ? (
                      <div className="bg-green-700 py-3">
                        Delivered at:{order.paid_time}
                      </div>
                    ) : (
                      <div className="bg-red-400 py-3 px-1 text-left">
                        Not Paid
                      </div>
                    )}
                  </CardBody>
                </Card>
                <Card className="relative top-4">
                  <CardBody>
                    <CardTitle>Items</CardTitle>
                    {order.orderItems &&
                      order.orderItems.map((item, i) => {
                        return (
                          <div className="flex flex-wrap justify-between items-center my-2">
                            <img src={item.Image} className="w-20 h-16" />
                            <CardText>{item.Title}</CardText>
                            <CardText> ${item.PriceDis}</CardText>
                            <CardText>{item.Description.slice(0, 20)}</CardText>
                          </div>
                        );
                      })}
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
          <div className="w-1/4">
            <Row>
              {" "}
              <Col max={8}>
                <Card>
                  <CardBody className="text-justify">
                    <CardTitle>Order Summary</CardTitle>
                    <CardText className="flex flex-col text-justify p-3">
                      <article className="flex justify-between items-center border-b-2 p-2">
                        Item <span className=" w-28">${order?.itemPrice}</span>
                      </article>

                      <article className="flex justify-between text-left items-center border-b-2 p-2">
                        shipping{" "}
                        <span className=" w-28"> ${order?.shipping}</span>
                      </article>

                      <article className="flex justify-between text-left items-center border-b-2 p-2">
                        Fees
                        <span className=" w-28">${order?.fees} </span>
                      </article>

                      <b className="flex justify-between text-left items-center border-b-2 p-2">
                        Order Total{" "}
                        <span className=" w-28">${order?.totalPrice}</span>
                      </b>
                    </CardText>
                    <Button
                      onClick={handlePayment}
                      variant="outline-primary w-full"
                    >
                      Make Payment
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </Container>{" "}
    </div>
  );
};

export default Order;
