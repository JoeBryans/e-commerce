import React, { useEffect } from "react";
import CheckOutSteps from "../components/CheckoutStep";
import {
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
import { Link, useNavigate } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { getTotal } from "../logic/featurs/slice";
import axios from "axios";

const PlaceOrder = () => {
  const cart = useSelector((state) => state.products.Carts);
  const user = useSelector((state) => state.products.user);
  const { cartItems, shippingAdress } = cart;
  console.log(cartItems);
  const navigate = useNavigate();
  //   useEffect(() => {
  //     dispatch(getTotal());
  //   }, [totalPrice, dispatch]);
  const handleOrder = async () => {
    try {
      const { data } = await axios.post(
        `http://localhost:5000/order`,
        {
          orderItems: cartItems,
          shippingAddress: shippingAdress,
          itemPrice: cart.ItemTotalPrice,
          shipping: cart.ShippingPrice,
          fees: cart.FeesPrice,
          totalPrice: cart.TotalPrice,
        }
        // {
        //   headers: {
        //     authorization: `Bearer ${user.token}`,
        //   },
        // }
      );
      navigate(`/order/${data.order._id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" w-screen  h-dvh relative top-20">
      <CheckOutSteps step1 step2 step3 step4 />

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
                        {shippingAdress.fullName}
                      </span>
                      <span>
                        {" "}
                        <b>Tel:</b>
                        {shippingAdress.phone}
                      </span>
                      {/* <b>Email:{shippingAdress.email}</b> */}
                      <span>
                        {" "}
                        <b>Address:</b>
                        {shippingAdress.address},{shippingAdress.country},
                        {shippingAdress.city}
                      </span>
                    </CardText>
                    <Link className="flex gap-2 items-center" to="/shipping">
                      Edit{" "}
                      <FaIcons.FaEdit className="text-blue-600" size={20} />
                    </Link>
                  </CardBody>
                </Card>

                <Card className="relative top-2">
                  <CardBody>
                    <CardTitle>Payment</CardTitle>
                    <CardText className="flex flex-col text-left">
                      <span>
                        <b>Method:</b>
                        Card
                      </span>
                    </CardText>
                    <Link className="flex gap-2 items-center" to="/payment">
                      Edit{" "}
                      <FaIcons.FaEdit className="text-blue-600" size={20} />
                    </Link>
                  </CardBody>
                </Card>

                <Card className="relative top-4">
                  <CardBody>
                    <CardTitle>Items</CardTitle>
                    {cartItems.map((item, i) => {
                      return (
                        <div className="flex flex-wrap justify-between items-center my-2">
                          <img src={item.Image} className="w-20 h-16" />
                          <CardText>{item.Name}</CardText>
                          <CardText> ${item.Price}</CardText>
                          <CardText>Qty{item.Quantity}</CardText>
                        </div>
                      );
                    })}

                    <Link className="flex gap-2 items-center" to="/cart">
                      Edit{" "}
                      <FaIcons.FaEdit className="text-blue-600" size={20} />
                    </Link>
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
                        Item{" "}
                        <span className=" w-28">
                          {" "}
                          ${cart.ItemTotalPrice.toFixed(2)}
                        </span>
                      </article>

                      <article className="flex justify-between text-left items-center border-b-2 p-2">
                        shipping{" "}
                        <span className=" w-28">
                          {" "}
                          ${cart.ShippingPrice.toFixed(2)}
                        </span>
                      </article>

                      <article className="flex justify-between text-left items-center border-b-2 p-2">
                        Fees
                        <span className=" w-28">
                          {" "}
                          ${cart.FeesPrice.toFixed(2)}{" "}
                        </span>
                      </article>

                      <b className="flex justify-between text-left items-center border-b-2 p-2">
                        Order Total{" "}
                        <span className=" w-28">
                          ${cart.TotalPrice.toFixed(2)}
                        </span>
                      </b>
                    </CardText>
                    <Button
                      onClick={handleOrder}
                      variant="outline-primary w-full"
                    >
                      Place Order
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PlaceOrder;
