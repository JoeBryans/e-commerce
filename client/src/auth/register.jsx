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
import FormCheckLabel from "react-bootstrap/esm/FormCheckLabel";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  // const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [reEnter, setReEnter] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [role, setRole] = useState("");
  const Register = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/auth/register", {
        username,
        email,
        password,
        phone,
        Role: role,
      });
      // if (res.data === "user already exist, please login") {
      //   setError("error");
      // }
      if (password !== reEnter) {
        setError("password most match!");
      } else {
        navigate("/login");
        alert("register successful");
      }
      console.log(res.data);
      // localStorage.setItem("user", JSON.stringify(res.data));
      // setError(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(role);
  return (
    <div className={style.auth}>
      <Card id={style.cardFormReg}>
        <span className="text-red-600">{error}</span>

        <Form id={style.formReg}>
          <FormGroup>
            <FormControl
              id={style.input}
              value={username}
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Name"
            />
          </FormGroup>
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
          <FormGroup>
            <FormControl
              id={style.input}
              value={reEnter}
              type="password"
              onChange={(e) => setReEnter(e.target.value)}
              placeholder="Re-enter"
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              id={style.input}
              value={phone}
              type="text"
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone"
            />
          </FormGroup>
          {/* <FormGroup>
            <FormControl
              id={style.input}
              value={adress}
              type="text"
              onChange={(e) => setAdress(e.target.value)}
              placeholder="Address"
            />
          </FormGroup> */}
          <label
            htmlFor=""
            className="flex justify-start items-center gap-3 mx-2"
          >
            <span>Role</span>
            <select
              name={role}
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className={style.input}
            >
              <option selected></option>
              <option value="user">user</option>
              <option value="seller">seller</option>
            </select>
          </label>
          {/* <FormGroup>
            <FormControl
              id={style.input}
              // value={image}
              type="text"
              placeholder="url"
              // onChange={(e) => setImage(e.target.value)}
            />
          </FormGroup> */}
          <br />
          <br />
          <Button className={style.btn} onClick={Register}>
            Create
          </Button>
        </Form>
        <br />
        <span>
          {" "}
          Already have an Account <Link to="/register">Login</Link>
        </span>
      </Card>
    </div>
  );
};

export default Register;
