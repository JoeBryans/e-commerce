import mongoose from "mongoose";

const ProductsSchema = new mongoose.Schema(
  {
    Title: { type: String, required: true, index: true },
    ShortDescription: { type: String },
    Image: { type: String },
    Description: { type: String, required: true },
    Price: { type: Number, required: true },
    PriceDis: { type: Number, required: true },
    Rating: { type: Number, default: 0 },
    Review: { type: Number, default: 0 },
    // Date: { Date },
  },
  { timestamps: true }
);
const ProductModle = mongoose.model("products", ProductsSchema);
export default ProductModle;
