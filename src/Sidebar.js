import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import navbarlinks from "./components/links/navbarlinks";
import { Link } from "react-router-dom";
import GrainIcon from "@mui/icons-material/Grain";
import { useUserContext } from "./Context/Contexti/user_context";
import { useCartContext } from "./Context/Contexti/cart_context";
import CloseIcon from "@mui/icons-material/Close";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import cart from "./components/photo/cart.png";
function Sidebar() {
  const { total_items, clearCart } = useCartContext();
  const { loginWithRedirect, myUser, logout } = useUserContext();

  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button className="sidebar-button" onClick={handleClickOpen}>
        <GrainIcon />
      </button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <div className="top-btn">
          <button type="button" className="close-button" onClick={handleClose}>
            <CloseIcon />
          </button>
        </div>

        <ul className="sidebar-buttons links">
          {navbarlinks.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
          {myUser ? (
            <Link className="link" to={"Checkout"}>
              Checkout
            </Link>
          ) : null}
        </ul>
        <div className=" sidebar-cart">
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
      </Dialog>
    </div>
  );
}
export default Sidebar;
