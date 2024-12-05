import express from "express";
import payment from "../controller/payment.js";

const paymentRouter = express.Router();

paymentRouter.post("/", payment);

export default paymentRouter;
