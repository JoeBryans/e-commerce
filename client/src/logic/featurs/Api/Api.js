import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: () => "/products/all_Product",
    }),
    loging: builder.mutation({
      query: (login) => ({
        url: ``,
        method: "POST",
        body: login,
        useLogingMutation,
      }),
    }),
    registering: builder.mutation({
      query: (register) => ({
        url: ``,
        method: "POST",
        body: register,
      }),
    }),
    payments: builder.mutation({
      query: (payment) => ({
        url: `/strip/payment`,
        method: "POST",
        body: payment,
      }),
    }),
  }),
});
export const {
  useGetProductQuery,
  useLogingMutation,
  useRegisterinMutation,
  usePaymentsMutation,
} = productApi;
