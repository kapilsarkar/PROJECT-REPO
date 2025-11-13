import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ImageDisplay from "./components/ImageDisplay";
import Counter from "./components/Counter.jsx";
import Home from "./components/home.jsx";
import FetchData from "./components/FetchData.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="counter" element={<Counter />} />
      <Route path="display" element={<ImageDisplay />} />
      <Route path="fetch" element={<FetchData />} />
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
