import express from "express";
import {
  Delete,
  Login,
  Register,
  Update,
  User,
  UserID,
} from "../controller/user.js";
import { AuthSeller, AuthUser } from "../Auth/auth.js";

const UserRouter = express.Router();

UserRouter.post("/register", Register);
UserRouter.post("/login", Login);
UserRouter.get("/user", AuthUser, AuthSeller, User);
UserRouter.get("/:id", AuthSeller, UserID);
UserRouter.put("/update/:id", AuthUser, AuthSeller, Update);
UserRouter.delete("/:id", AuthUser, AuthSeller, Delete);

export default UserRouter;
