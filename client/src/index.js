import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
// import { store } from "./context/store";
import "react-toastify/dist/ReactToastify.css";
import store from "./logic/store";
import { getTotal } from "./logic/featurs/slice";
store.dispatch(getTotal());
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
