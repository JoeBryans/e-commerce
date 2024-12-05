import express from "express";
import {
  allProducts,
  create,
  deletes,
  singleProduct,
  update,
} from "../controller/products.js";
import { AuthSeller } from "../Auth/auth.js";
import { upload } from "../utils/multer.js";

const productRouter = express.Router();

productRouter.post("/create", upload, create);
productRouter.get("/all_Product", allProducts);
productRouter.put("/update/:id", AuthSeller, update);
productRouter.get("/:id", singleProduct);
productRouter.delete("/delete/:id", AuthSeller, deletes);

export default productRouter;
