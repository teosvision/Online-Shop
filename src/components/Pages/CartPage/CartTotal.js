import React from "react";
import { formatPrice } from "../../../Context/utilis/helpers";
import { useCartContext } from "../../../Context/Contexti/cart_context";
import { Link } from "react-router-dom";
import { useUserContext } from "../../../Context/Contexti/user_context";
const CartTotal = () => {
  const { total_amount, shipping_fee } = useCartContext();
  const { loginWithRedirect, myUser, logout } = useUserContext();
  return (
    <div className="cart-col">
      <div className="column">
        <article>
          <p>
            <label>Subtotal:</label>
            <span>{formatPrice(total_amount)}</span>
          </p>
          <p>
            Shipping Fee : <span>{formatPrice(shipping_fee)}</span>
          </p>
          <hr />
          <h4>
            Order Total: <span>{formatPrice(total_amount + shipping_fee)}</span>
          </h4>
        </article>
        {myUser ? (
          <Link to={"/Checkout"} className="btn">
            Proceed to Checkout
          </Link>
        ) : (
          <button type="button" className="btn" onClick={loginWithRedirect}>
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default CartTotal;
