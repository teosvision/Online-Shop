import React from "react";
import { Container } from "@mui/system";
import OneProduct from "./OneProduct";
const GridView = ({ products }) => {
  return (
    <Container>
      <div className="products-container">
        {products.map((item) => {
          return <OneProduct key={item.id} {...item} />;
        })}
      </div>
    </Container>
  );
};

export default GridView;
