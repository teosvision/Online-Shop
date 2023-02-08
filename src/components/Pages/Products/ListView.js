import { Container } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../../../Context/utilis/helpers";
const ListView = ({ products }) => {
  return (
    <Container>
      {products.map((item) => {
        return (
          <div className="listview" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="description">
              <h4>{item.name}</h4>
              <p style={{ color: "#c59849" }}>{formatPrice(item.price)}</p>
              <p>{item.description.substring(0, 150)}...</p>
              <Link className="details-btn" to={`/Products/${item.id}`}>
                Details
              </Link>
            </div>
          </div>
        );
      })}
    </Container>
  );
};

export default ListView;
