import React from "react";
import { Container } from "@mui/material";
import { useFilterContext } from "../../../Context/Contexti/filter_context";
import GridViewIcon from "@mui/icons-material/GridView";
import ViewListIcon from "@mui/icons-material/ViewList";
const Sort = () => {
  const {
    filtered_products: products,
    grid_view,
    setGridView,
    setListView,
    sort,
    updateSort,
  } = useFilterContext();

  return (
    <Container>
      <div className="sort">
        <div className="btn-container">
          <button
            onClick={setGridView}
            className={`${grid_view ? "active" : null}`}
          >
            <GridViewIcon />
          </button>
          <button
            onClick={setListView}
            className={`${!grid_view ? "active" : null}`}
          >
            <ViewListIcon />
          </button>
        </div>
        <p>{products.length} Products Found</p>
        <hr />
        <form>
          <label htmlFor="sort">Sort by</label>
          <select
            value={sort}
            onChange={updateSort}
            name="sort"
            id="sort"
            className="sort-input"
          >
            <option value="price-lowest">Price(Lowest)</option>
            <option value="price-highest">Price (Highest)</option>
            <option value="name-a">Name(A-Z)</option>
            <option value="name-z">Name(Z-A)</option>
          </select>
        </form>
      </div>
    </Container>
  );
};

export default Sort;
