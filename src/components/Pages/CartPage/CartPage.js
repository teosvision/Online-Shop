import { Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../../Context/Contexti/cart_context";
import RoutePage from "../../special-components/RoutePage";
import CartContent from "./CartContent";

const CartPage = () => {
  const { cart } = useCartContext();

  if (cart.length < 1) {
    return (
      <Container>
        <div className="cart-page">
          <h2>Your cart is empty</h2>
          <Link className="btn" to="/Products">
            Fill It
          </Link>
        </div>
      </Container>
    );
  }
  return (
    <div>
      <RoutePage title={"Cart"} />
      <div>
        <CartContent />
      </div>
    </div>
  );
};

export default CartPage;
