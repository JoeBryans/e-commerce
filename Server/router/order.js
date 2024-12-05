import express from "express";
import { Order, getOrder } from "../controller/order.js";
import { AuthUser, verifyUser } from "../Auth/auth.js";

const orderRouter = express.Router();

orderRouter.post("/", Order);
orderRouter.get("/:id", getOrder);

export default orderRouter;
