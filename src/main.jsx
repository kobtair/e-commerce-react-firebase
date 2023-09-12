import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { UserContextProvider } from "./contexts/UserContext/UserContext.jsx";
import { CategoriesContextProvider } from "./contexts/CategoriesContext/CategoriesContext.jsx";
import { CartProvider } from "./contexts/ShoppingCartContext/cart.context.jsx";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <CategoriesContextProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
