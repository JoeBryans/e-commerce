import { combineReducers } from "redux";
import { addproduct, productReducer } from "./productRed";

export const Reducers = combineReducers({
  allproducts: productReducer,
  //   addcart: addproduct,
});
