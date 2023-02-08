import React from "react";
import GridView from "./GridView";
import ListView from "./ListView";
import { useFilterContext } from "../../../Context/Contexti/filter_context";
const ProductList = () => {
  const { filtered_products: products, grid_view } = useFilterContext();

  if (products.length < 1) {
    return (
      <h5
        style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
      >
        Sorry no products matched your search...
      </h5>
    );
  }
  if (grid_view === false) {
    return <ListView products={products} />;
  }
  return <GridView products={products}>Product List</GridView>;
};

export default ProductList;
