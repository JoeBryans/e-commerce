import { Products } from "../../pages/Data";
import {
  ADD_PRODUCT,
  ADJUST_QUANTITY,
  REMOV_PRODUCT,
  SET_PRODUCT,
} from "../actionType";
// import * as actionType from "./actionType";

const initialstate = {
  products: Products,
  cart: [],
};

export const productReducer = (state = initialstate, action) => {
  switch (action.type) {
    case SET_PRODUCT:
      return state;
    case ADD_PRODUCT:
      const items = action.payload;
      const item = state.products.find(
        (items) => items._id === action.payload._id
      );
      const existItem = state.cart.find((cartItem) =>
        cartItem._id === action.payload._id ? true : false
      );
      localStorage.setItem("cartItem", JSON.stringify(items));

      return {
        ...state,
        cart: existItem
          ? state.cart.map((item) =>
              item._id === action.payload._id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case REMOV_PRODUCT:
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== action.payload._id),
      };
    case ADJUST_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item._id === action.payload._id
            ? { ...item, qty: action.payload.qty }
            : item
        ),
      };

    default:
      return state;
  }
};
// export const addproduct = (state = initialstate, action) => {
//   switch (action.type) {
//     case actionType.ADD_PRODUCT:
//       const item = state.products.find(
//         (items) => items._id === action.payload._id
//       );
//       const existItem = state.cart.find((cartItem) =>
//         cartItem._id === action.payload.id ? true : false
//       );
//       return {
//         ...state,
//         cart: existItem
//           ? state.cart.map((item) =>
//               item.id === action.payload.id
//                 ? { ...item, qty: item.qty + 1 }
//                 : item
//             )
//           : [...state.cart, { ...item, qty: 1 }],
//       };

//     default:
//       return state;
//   }
// };
