import React from "react";
import { formatPrice } from "../../../Context/utilis/helpers";
import { useCartContext } from "../../../Context/Contexti/cart_context";
import DeleteIcon from "@mui/icons-material/Delete";

import { Container } from "@mui/material";
import Quantity from "./Quantity";

const CartItem = ({ id, image, name, color, price, amount }) => {
  const { removeItem, toggleAmount } = useCartContext();
  const increase = () => {
    toggleAmount(id, "inc");
  };
  const decrease = () => {
    toggleAmount(id, "dec");
  };

  return (
    <Container>
      <div className="cart-item">
        <div className="title">
          <img src={image} alt={name} />
          <div>
            <h5 className="name">{name}</h5>
            <p className="color">
              color : <span style={{ background: color }}></span>
            </p>
            <h5 className="price-small">{formatPrice(price)}</h5>
          </div>
        </div>
        <h5 className="price">{formatPrice(price)}</h5>
        <Quantity amount={amount} increase={increase} decrease={decrease} />
        <h5 className="subtotal">{formatPrice(price * amount)}</h5>
        <button
          type="button"
          className="remove-btn"
          onClick={() => removeItem(id)}
        >
          <DeleteIcon />
        </button>
      </div>
    </Container>
  );
};

export default CartItem;
