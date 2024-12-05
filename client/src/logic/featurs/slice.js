import { createSlice, nanoid } from "@reduxjs/toolkit";
import { Products } from "../../pages/Data";
const initialState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
  product: Products,
  status: null,
  Carts: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingAdress: localStorage.getItem("shippinAdress")
      ? JSON.parse(localStorage.getItem("shippinAdress"))
      : {},
    ShippingPrice: 0,
    FeesPrice: 0,
    TotalQuantity: 0,
    TotalPrice: 0,
    ItemTotalPrice: 0,
  },
};
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    AddCart(state, action) {
      const itemIndex = state.Carts.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );
      if (itemIndex >= 0) {
        state.Carts.cartItems[itemIndex].Quantity += 1;
      } else {
        const item = { ...action.payload, Quantity: 1 };
        state.Carts.cartItems.push(item);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.Carts.cartItems));
    },
    RemoveItem: (state, action) => {
      state.Carts.cartItems = state.Carts.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
      localStorage.setItem("cartItems", JSON.stringify(state.Carts.cartItems));
    },
    DecreaseQty: (state, action) => {
      const itemIndex = state.Carts.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );
      const itemQty = state.Carts.cartItems[itemIndex];
      if (itemQty.Quantity > 1) {
        state.Carts.cartItems[itemIndex].Quantity -= 1;
      } else {
        state.Carts.cartItems = state.Carts.cartItems.filter(
          (item) => item._id !== action.payload._id
        );
        // localStorage.setItem("cartItems", JSON.stringify(state.Carts));
      }
      localStorage.setItem("cartItems", JSON.stringify(state.Carts.cartItems));
    },
    getTotal: (state, action) => {
      let { total, qty } = state.Carts.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { Price, Quantity } = cartItem;
          const totalItems = Price * Quantity;
          cartTotal.total += totalItems;
          cartTotal.qty += Quantity;
          return cartTotal;
        },
        { total: 0, qty: 0 }
      );
      state.Carts.TotalQuantity = qty;
      state.Carts.ItemTotalPrice = total;
      const round2 = (num) => Math.round(num * 100 + Number.EPSILON) / 100;
      const Tax = round2(0.15 * state.Carts.ItemTotalPrice);
      const shippingPrice =
        state.Carts.ItemTotalPrice < 100 ? round2(0) : round2(10);

      state.Carts.FeesPrice = Tax;
      state.Carts.ShippingPrice = shippingPrice;
      state.Carts.TotalPrice =
        state.Carts.FeesPrice +
        state.Carts.ShippingPrice +
        state.Carts.ItemTotalPrice;
    },
    getTax: (state, action) => {},
    ShippingAdress: (state, action) => {
      state.Carts.shippingAdress = action.payload;
      localStorage.setItem(
        "shippinAdress",
        JSON.stringify(state.Carts.shippingAdress)
      );
    },
    LogOut: (state, action) => {
      state.user = null;
      state.Carts.cartItems = [];
      state.Carts.shippingAdress = {};
    },
  },
});
export const {
  AddCart,
  RemoveItem,
  DecreaseQty,
  getTotal,
  setUser,
  LogOut,
  getTax,

  ShippingAdress,
} = productSlice.actions;
export default productSlice.reducer;
