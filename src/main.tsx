import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import 'react-toastify/dist/ReactToastify.css';
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import BasketProvider from "./context/BasketContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BasketProvider>
      <App />
    </BasketProvider>
  </React.StrictMode>
);
