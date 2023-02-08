import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import navbarlinks from "./links/navbarlinks";
import "../components/style/Style.scss";
import Sidebar from "../Sidebar";
import { useCartContext } from "../Context/Contexti/cart_context";
import cart from "./photo/cart.png";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import { useUserContext } from "../Context/Contexti/user_context";
const Header = () => {
  const { total_items, clearCart } = useCartContext();
  const { loginWithRedirect, myUser, logout } = useUserContext();

  return (
    <div>
      <CssBaseline />
      <Container maxWidth="lg">
        <div className="navbar">
          <Link to={"/"} className="logo">
            <h3>TheShop</h3>
          </Link>
          <ul className="button">
            {navbarlinks.map((link) => {
              const { id, text, url } = link;
              return (
                <li key={id}>
                  <Link to={url}>{text}</Link>
                </li>
              );
            })}
            {myUser ? <Link to={"/Checkout"}>Checkout</Link> : null}
          </ul>
          <div className="cart">
            <Link to="/CartPage">
              Cart
              <span>
                <img src={cart} alt="/" />
                <label>{total_items}</label>
              </span>
            </Link>
            {myUser ? (
              <button
                type="button"
                onClick={() => {
                  clearCart();
                  localStorage.removeItem("user");
                  logout({ returnTo: window.location.origin });
                }}
              >
                Logout
                <PersonRemoveIcon className="login-img" />
              </button>
            ) : (
              <button type="button" onClick={loginWithRedirect}>
                Login
                <PersonAddAlt1Icon className="login-img" />
              </button>
            )}
          </div>
          <div className="phone-button">
            <Sidebar />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
