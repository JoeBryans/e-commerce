import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const CheckOutSteps = (props) => {
  return (
    <div className="w-screen ">
      <Container>
        <Row>
          <Col
            className={
              props.step1
                ? "border-b-8  border-blue-600 text-blue-600 font-semibold "
                : "border-b-8  border-slate-400 text-slate-400 font-semibold"
            }
          >
            Sign-in
          </Col>
          <Col
            className={
              props.step2
                ? "border-b-8  border-blue-600 text-blue-600 font-semibold"
                : "border-b-8  border-slate-400 text-slate-400 font-semibold"
            }
          >
            Shipping
          </Col>
          <Col
            className={
              props.step3
                ? "border-b-8  border-blue-600 text-blue-600 font-semibold"
                : "border-b-8  border-slate-400 text-slate-400 font-semibold"
            }
          >
            Payment
          </Col>{" "}
          <Col
            className={
              props.step4
                ? "border-b-8  border-blue-600 text-blue-600 font-semibold"
                : "border-b-8  border-slate-400 text-slate-400 font-semibold"
            }
          >
            Place Order
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CheckOutSteps;
