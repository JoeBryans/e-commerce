import React, { useState } from "react";
import {
  Button,
  Card,
  Container,
  Form,
  FormCheck,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import style from "./auth.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useLogingMutation } from "../logic/featurs/Api/Api";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../logic/featurs/slice";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // const{data,error,isSuccess}=useLogingMutation()
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Login = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/auth/login", {
        email,
        password,
      });
      if (res.data?.Role === "seller") {
        navigate("/admin");
      } else {
        navigate("/");
      }

      dispatch(setUser(res.data));
      console.log(res.data);
    } catch (error) {
      toast.error(error.response?.data);
    }
  };

  // const Login = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await axios.post("http://localhost:5000/auth/login", {
  //       email,
  //       password,
  //     });

  //     navigate("/");

  //     dispatch(setUser(res.data));
  //   } catch (error) {
  //     toast.error(error);
  //   }
  // };

  return (
    <div className={style.auth}>
      <Card id={style.cardForm}>
        <Form id={style.form}>
          <FormGroup>
            <FormControl
              id={style.input}
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              id={style.input}
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </FormGroup>

          <Button type="submit" onClick={Login}>
            Login
          </Button>
        </Form>
        <Link>forgotten password</Link>
        <span>
          {" "}
          Don't have an Account <Link to="/register">Register</Link>
        </span>
      </Card>
    </div>
  );
};

export default Login;
