import React from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../../../Context/utilis/helpers";

const OneProduct = ({ id, name, price, image }) => {
  return (
    <div className="container">
      <Link to={`/Products/${id}`}>
        <img src={image} alt="" />
      </Link>
      <div className="description">
        <h5>{name}</h5>
        <p>{formatPrice(price)}</p>
      </div>
    </div>
  );
};

export default OneProduct;
