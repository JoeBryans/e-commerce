import {
  ADD_PRODUCT,
  ADJUST_QUANTITY,
  REMOV_PRODUCT,
  SET_PRODUCT,
} from "./actionType";

export const setproduct = (products) => {
  return {
    type: SET_PRODUCT,
    payload: products,
  };
};
export const addproduct = (item) => {
  return {
    type: ADD_PRODUCT,
    payload: {
      _id: item,
    },
  };
};
export const removproduct = (item) => {
  return {
    type: REMOV_PRODUCT,
    payload: {
      _id: item,
    },
  };
};

export const adjust_quantity = (item, value) => {
  return {
    type: ADJUST_QUANTITY,
    payload: {
      _id: item,
      qty: value,
    },
  };
};
