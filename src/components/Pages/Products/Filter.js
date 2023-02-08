import { Container } from "@mui/material";
import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import { useFilterContext } from "../../../Context/Contexti/filter_context";
import { formatPrice, getUniqueValues } from "../../../Context/utilis/helpers";
const Filter = () => {
  const {
    filters: {
      text,
      category,
      price,
      company,
      color,
      min_price,
      max_price,
      shipping,
    },
    updateFilters,
    clearFilters,
    all_products,
  } = useFilterContext();

  const categories = getUniqueValues(all_products, "category");
  const comapanies = getUniqueValues(all_products, "company");
  const colors = getUniqueValues(all_products, "colors");

  return (
    <Container>
      <div className="filter-content">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-control">
            <input
              type="text"
              name="text"
              placeholder="Search"
              className="search-input"
              value={text}
              onChange={updateFilters}
            />
          </div>

          <div className="form-control">
            <h5>Category</h5>
            <div>
              {categories.map((c, index) => {
                return (
                  <button
                    type="button"
                    key={index}
                    name="category"
                    onClick={updateFilters}
                    className={`
                    ${category === c.toLowerCase() ? "active" : null}`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="form-control">
            <h5>Comapany</h5>
            <select
              name="company"
              value={company}
              onChange={updateFilters}
              className="company"
            >
              {comapanies.map((c, index) => {
                return (
                  <option key={index} value={c}>
                    {c}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="form-control">
            <h5>colors</h5>
            <div className="colors">
              {colors.map((c, index) => {
                if (c === "all") {
                  return (
                    <button
                      name="color"
                      onClick={updateFilters}
                      data-color={c}
                      key={index}
                      className={`${
                        color === "all" ? "all-btn active" : "all-btn"
                      }`}
                    >
                      All
                    </button>
                  );
                }
                return (
                  <button
                    key={index}
                    name="color"
                    style={{ background: c }}
                    data-color={c}
                    onClick={updateFilters}
                    className={`${
                      color === c ? "color-btn active" : "color-btn"
                    }`}
                  >
                    {color === c ? <CheckIcon /> : null}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="form-control">
            <h5>Price</h5>
            <p>{formatPrice(price)}</p>
            <input
              type="range"
              min={min_price}
              max={max_price}
              value={price}
              onChange={updateFilters}
              name="price"
            />
          </div>
          <div className="form-control shipping">
            <label htmlFor="shipping">Shipping</label>
            <input
              id="shipping"
              type="checkbox"
              name="shipping"
              checked={shipping}
              onChange={updateFilters}
            />
          </div>

          <button className="clear-btn" type="button" onClick={clearFilters}>
            Clear
          </button>
        </form>
      </div>
    </Container>
  );
};

export default Filter;
