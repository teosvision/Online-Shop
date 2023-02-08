import React, { useEffect } from "react";
import { useProductsContext } from "../../../Context/Contexti/product_context";
import { Link } from "react-router-dom";
import { formatPrice } from "../../../Context/utilis/helpers";
import Loading from "../../special-components/Loading";
import Error from "../../special-components/Error";
const Part2 = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext();

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <section className="containeri-2 ">
      <div>
        <h2>Featured Products</h2>
      </div>

      <div className="items-container">
        {featured.slice(0, 3).map((product) => {
          return (
            <div className="item" key={product.id}>
              <Link className="link" to={`/Products/${product.id}`}>
                <img src={product.image} alt={product.name} />
                <div className="item-description ">
                  <p>{product.name}</p>
                  <p className="price">{formatPrice(product.price)}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      <Link className="btn-products" to="/products">
        All Products
      </Link>
    </section>
  );
};

export default Part2;
