import React, { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useCartContext } from "../../../../Context/Contexti/cart_context";
const AddtoCart = ({ product }) => {
  const { addToCart } = useCartContext();
  const { id, stock, colors } = product;

  const [maincolor, setColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1;
      if (tempAmount > stock) {
        tempAmount = stock;
      }
      return tempAmount;
    });
  };
  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };

  return (
    <>
      <div className="addto-card">
        <span>Color : </span>
        <div className="colors">
          {colors.map((color, index) => {
            return (
              <button
                style={{ background: color }}
                className={`${
                  maincolor === color ? "color-btn active" : "color-btn"
                }`}
                key={index}
                onClick={() => setColor(color)}
              >
                {maincolor === color ? <CheckIcon /> : null}
              </button>
            );
          })}
        </div>
      </div>
      <div className="butoni">
        <div className="add-button">
          <button onClick={() => decrease()}>-</button>
          {amount}
          <button onClick={() => increase()}>+</button>
        </div>
        <Link
          className="btn"
          onClick={() => addToCart(id, maincolor, amount, product)}
          to={"/CartPage"}
        >
          Add to Cart
        </Link>
      </div>
    </>
  );
};

export default AddtoCart;
