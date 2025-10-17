import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { FireBaseProvider } from "./context/FireBase.jsx";
createRoot(document.getElementById("root")).render(
  <FireBaseProvider>
    <App />
  </FireBaseProvider>
);
