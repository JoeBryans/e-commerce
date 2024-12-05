import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./featurs/slice";
import { productApi } from "./featurs/Api/Api";
const store = configureStore({
  reducer: {
    products: productSlice,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

export default store;
