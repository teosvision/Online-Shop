import React from "react";
import ReactDOM from "react-dom/client";
import "./components/style/Style.scss";
import App from "./App";
import { ProductsProvider } from "./Context/Contexti/product_context";
import { FilterProvider } from "./Context/Contexti/filter_context";
import { CartProvider } from "./Context/Contexti/cart_context";
import { Auth0Provider } from "@auth0/auth0-react";
import { UserProvider } from "./Context/Contexti/user_context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH_DOMAIN}
    clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
    cacheLocation="localstorage"
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
);
