import { Container } from "@mui/material";
import React from "react";
import Filter from "./Filter";
import RoutePage from "../../special-components/RoutePage";
import ProductList from "./ProductList";
import Sort from "./Sort";

const Products = () => {
  return (
    <>
      <RoutePage title="Products" />
      <Container maxWidth="lg">
        <div>
          <div className="products">
            <Filter />
            <div>
              <Sort />
              <ProductList />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Products;
