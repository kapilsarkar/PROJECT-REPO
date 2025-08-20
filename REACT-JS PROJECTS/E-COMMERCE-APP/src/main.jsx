import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "../src/utils/store.js";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Error from "./components/Error.jsx";
import Body from "./components/Body.jsx";
import Cart from "./components/Cart.jsx";
import Men from "./components/Men.jsx";
import Women from "./components/Women.jsx";
import ShoeMen from "./components/ShoeMen.jsx";
import ShoeWomen from "./components/ShoeWomen.jsx";
import Jewel from "./components/Jewel.jsx";
import { ToastContainer } from "react-toastify";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<Error />}>
      <Route index element={<Body />} />
      <Route path="cart" element={<Cart />} />
      <Route path="men" element={<Men />} />
      <Route path="women" element={<Women />} />
      <Route path="shoeMen" element={<ShoeMen />} />
      <Route path="shoeWoMen" element={<ShoeWomen />} />
      <Route path="jewel" element={<Jewel />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  </Provider>
);
