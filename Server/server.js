import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import DataBase from "./config/db.js";
import UserRouter from "./router/user.js";
import productRouter from "./router/products.js";
import paymentRouter from "./router/payment.js";
import orderRouter from "./router/order.js";

dotenv.config();
DataBase();
const port = process.env.PORT || 5001;
const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use("/auth", UserRouter);
app.use("/products", productRouter);
app.use("/strip", paymentRouter);
app.use("/order", orderRouter);
app.use((err, req, res, next) => {
  const statusCod = err.status || 500;
  const message = err.message || "something went Wroung!";
  return res.status(statusCod).json({
    success: false,
    status: statusCod,
    message: message,
    stack: err.stack,
  });
});
app.listen(port, () =>
  console.log(`server running at http://localhost:${port}`)
);
