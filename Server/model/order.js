import mongoose from "mongoose";

const OrderSchema = mongoose.Schema(
  {
    orderItems: [
      {
        Title: { type: String, required: true, index: true },
        ShortDescription: { type: String },
        Image: { type: String },
        Description: { type: String, required: true },
        Price: { type: Number, required: true },
        PriceDis: { type: Number, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "products",
          required: true,
        },
      },
    ],
    shippingAddress: {
      fullName: { type: String },
      address: { type: String },
      city: { type: String, required: true },
      postal: { type: String, required: true },
      country: { type: String, required: true },
      phone: { type: String, required: true },
    },
    paymenMethod: { type: Boolean, default: false },
    paymentStatus: {
      id: String,
      status: String,
      update_time: String,
      email: String,
    },
    itemPrice: { type: String },
    shipping: { type: String },
    fees: { type: String },
    totalPrice: { type: String },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    paid: { type: Boolean, default: false },
    paid_time: { type: Date },
    delivered: { type: Boolean, default: false },
    delivered_time: { type: Date },
  },

  { timestamps: true }
);
const orderModle = mongoose.model("order", OrderSchema);
export default orderModle;
