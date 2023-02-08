import React from "react";
import { Container } from "@mui/system";
import CartColumns from "./CartColumns";
import CartItem from "./CartItem";
import { useCartContext } from "../../../Context/Contexti/cart_context";
import { Link } from "react-router-dom";
import CartTotal from "./CartTotal";

const CartContent = () => {
  const { cart, clearCart } = useCartContext();
  return (
    <Container>
      <CartColumns />

      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <hr />
      <div className="cart-buttons">
        <Link className="link-btn" to={"/Products"}>
          Continue Shopping
        </Link>
        <button onClick={clearCart} type="button" className="clear-btn">
          Clear Cart
        </button>
      </div>
      <CartTotal />
    </Container>
  );
};

export default CartContent;
