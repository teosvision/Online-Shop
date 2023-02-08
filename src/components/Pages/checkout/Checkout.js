import React from "react";
import { Container } from "@mui/system";
import RoutePage from "../../special-components/RoutePage";
import Stripecheckout from "../../stripe/Stripecheckout";
import { useCartContext } from "../../../Context/Contexti/cart_context";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { cart } = useCartContext();
  return (
    <div>
      <RoutePage title="Checkout" />
      <Container>
        {cart.length < 1 ? (
          <div className="empty">
            <h2>Your cart is empty!</h2>
            <Link className="btn" to="/Products">
              Fill It
            </Link>
          </div>
        ) : (
          <Stripecheckout />
        )}
      </Container>
    </div>
  );
};

export default Checkout;
