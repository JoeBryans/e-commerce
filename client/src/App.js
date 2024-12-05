import "./App.css";
import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
// import Home from "./pages/Home";
import { Container } from "react-bootstrap";
// import Product from "./pages/product";
import Cart from "./pages/cart";
// import Favourite from "./pages/favourite";
// import Order from "./pages/order";
import Login from "./auth/login";
import Register from "./auth/register";
// import Products from "./pages/products";
// import Dashbord from "./admin/Dashbord";
// import Product from "./admin/Products";
// import Add from "./admin/Add";
// import { useEffect, useState } from "react";
// import Edit from "./admin/edit";
import Shop from "./pages/Shop";
import Product from "./pages/product";
import Layout from "./Layout";
import ProductDetails from "./pages/product-details";
import Searchs from "./pages/Search";
import Admins from "./admin/Admins";
import Dashboard from "./admin/Dashboard";
import AllProduct from "./admin/Products";
import Add from "./admin/Add";
import Orders from "./admin/Orders";
import Shipping from "./pages/shipping";
import { ToastContainer } from "react-toastify";
import Payments from "./pages/payment";
import { useSelector } from "react-redux";
import Checkout from "./pages/checkout-success";
import Order from "./pages/order";
import PayButton from "./components/PayButton";
import PlaceOrder from "./pages/placeOrder";
// import "react-toastify/dist/react-toastify.css";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Shop />,
        },
        {
          path: "/product-details/:_id",
          element: <ProductDetails />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/Search",
          element: <Searchs />,
        },
        {
          path: "/login",
          // {
          //   user? redirect('/'):
          // }
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/shipping",
          element: <Shipping />,
        },
        {
          path: "/payment",
          element: <Payments />,
        },
        {
          path: "/placeOrder",
          element: <PlaceOrder />,
        },
        {
          path: "/order/:id",
          element: <Order />,
        },
        {
          path: "/PayButton",
          element: <PayButton />,
        },
        {
          path: "/checkout-success",
          element: <Checkout />,
        },
      ],
    },
    {
      path: "/admin",
      element: <Admins />,
      children: [
        {
          path: "/admin/Dashboard",
          element: <Dashboard />,
        },
        {
          path: "/admin/Products",
          element: <AllProduct />,
        },
        {
          path: "/admin/Add",
          element: <Add />,
        },
        {
          path: "/admin/Orders",
          element: <Orders />,
        },
        {
          path: "/admin",
          element: <Login />,
        },
        {
          path: "/admin",
          element: <Register />,
        },
      ],
    },
  ]);
  return (
    <div className="App font-mono">
      <ToastContainer position="top-center" limit={1} />
      <RouterProvider router={router} />
      {/* <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/product/:Slug" element={<Product />} /> */}
      {/* <Route path="/Home" element={<Home />} /> */}
      {/* <Route path="/products/:Slug" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/order" element={<Order />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Dashbord" element={<Dashbord />} />
        <Route path="/Add" element={<Add />} />
        <Route path="/Products" element={<Product />} />
        <Route path="/edit/:id" element={<Edit />} /> */}
    </div>
  );
}

export default App;
