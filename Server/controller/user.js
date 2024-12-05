import jwt from "jsonwebtoken";
// import Users from "../models/user.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import Users from "../model/user.js";
import { CreateError } from "../utils/error.js";
dotenv.config();

export const Register = async (req, res) => {
  const { username, email, mobile, image, password, admin } = req.body;
  const existUser = await Users.findOne({ email });
  try {
    if (existUser) {
      res.json("user already exist, please login");
    } else {
      const pass = await bcrypt.hashSync(password, 10);
      const user = new Users({ ...req.body, password: pass });
      await user.save();
      res.json({ user, message: "Register successfull" });
      console.log(user);
    }
  } catch (error) {
    console.log(error);
  }
};
export const Login = async (req, res, next) => {
  const { password, email } = req.body;
  const user = await Users.findOne({ email });
  try {
    if (!user) {
      next(CreateError(401, "user with email  is invalid"));
    }
    const confirmpass = await bcrypt.compare(password, user.password);
    if (!confirmpass) {
      next(CreateError(401, "user with email or password dosn't exist"));
    }
    const token = jwt.sign(
      { id: user._id, username: user.username, Role: user.Role },
      process.env.Jkeys
    );
    const {
      password: pass,
      __v,
      crea,
      createdAt,
      updatedAt,
      ...rest
    } = user._doc;
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json(rest);
  } catch (error) {
    next(CreateError(error));
  }
};
export const Delete = async () => {};
export const User = async (req, res) => {
  try {
    const user = await Users.find();
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};
export const UserID = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await Users.findById(id);
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};
export const Update = async (req, res) => {
  const { id } = req.params;
  const user = await Users.findByIdAndUpdate(id, req.body);
  try {
    user.save();
    res.json("user updated successfully");
  } catch (error) {
    console.log(error);
  }
};
