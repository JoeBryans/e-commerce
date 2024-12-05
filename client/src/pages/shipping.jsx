import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CheckOutSteps from "../components/CheckoutStep";
import { useDispatch, useSelector } from "react-redux";
import { ShippingAdress } from "../logic/featurs/slice";

const Shipping = () => {
  const ShippingInfo = useSelector(
    (state) => state.products.Carts.shippingAdress
  );
  const userInfo = useSelector((state) => state.products.user);
  const [fullName, setFullName] = useState(ShippingInfo.fullName || "");
  const [address, setAddress] = useState(ShippingInfo.address || "");
  const [city, setCity] = useState(ShippingInfo.city || "");
  const [postal, setPostal] = useState(ShippingInfo.postal || "");
  const [country, setCountry] = useState(ShippingInfo.country || "");
  const [phone, setPhone] = useState(ShippingInfo.phone || "");
  const [email, setEmail] = useState(ShippingInfo.phone || "");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
  }, [userInfo, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      ShippingAdress({
        fullName,
        address,
        phone,
        postal,
        city,
        country,
      })
    );
    navigate("/payment");
  };
  return (
    <div className=" w-screen  h-dvh relative top-20">
      <CheckOutSteps step1 step2 />{" "}
      <div
        className="flex w-screen small-container justify-center items-center "
        style={{ height: "100%" }}
      >
        <div className=" w-3/6  flex justify-around gap-5 items-center">
          <Form className="w-full px-2 py-3 flex flex-col gap-3 bg-transparent ">
            <FormLabel className=" text-slate-700 text-left">
              <span className="mx-2">Full Name</span>{" "}
              <FormGroup>
                <FormControl
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Full Name"
                />
              </FormGroup>
            </FormLabel>
            <FormLabel className=" text-slate-700 text-left">
              <span className="mx-2">Tel</span>{" "}
              <FormGroup>
                <FormControl
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone"
                />
              </FormGroup>
            </FormLabel>
            <FormLabel className=" text-slate-700 text-left">
              <span className="mx-2">Address</span>
              <FormGroup>
                <FormControl
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Address"
                />
              </FormGroup>
            </FormLabel>

            <FormLabel className=" text-slate-700 text-left">
              <span className="mx-2">Country</span>
              <FormGroup>
                <FormControl
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  placeholder="Country"
                />
              </FormGroup>
            </FormLabel>
            <FormLabel className=" text-slate-700 text-left">
              <span className="mx-2">City</span>
              <FormGroup>
                <FormControl
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="City"
                />
              </FormGroup>
            </FormLabel>
            <FormLabel className=" text-slate-700 text-left">
              <span className="mx-2">Postal Code</span>
              <FormGroup>
                <FormControl
                  type="text"
                  value={postal}
                  onChange={(e) => setPostal(e.target.value)}
                  placeholder="Postal Code"
                />
              </FormGroup>
            </FormLabel>
            <Button
              type="Submit"
              onClick={handleSubmit}
              variant="outline-primary"
            >
              <h4>Shipping Address</h4>
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
