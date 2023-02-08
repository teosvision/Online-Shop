import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../../../Context/utilis/helpers";
import { useParams } from "react-router-dom";
import { producturl_id as url } from "../../../Context/utilis/constants";
import { useProductsContext } from "../../../Context/Contexti/product_context";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import RoutePage from "../../special-components/RoutePage";
import Productsimages from "./components/Productsimages";
import Stars from "./components/Stars";
import AddtoCart from "./components/AddtoCart";
import Loading1 from "../../special-components/Loading1";

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
  }, [id]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [error]);

  if (loading) {
    return <Loading1 />;
  }
  if (error) {
    return (
      <p
        style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
      >
        Error
      </p>
    );
  }

  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    company,
    images,
  } = product;

  return (
    <>
      <RoutePage title={name} product />
      <Container maxWidth="lg">
        <Link className="btn" to="/products">
          Back to products
        </Link>
        <div className="product-page">
          <Productsimages images={images} />
          <div className="item">
            <h2>{name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <h4>{formatPrice(price)}</h4>
            <p>{description}</p>
            <p className="info">
              <span>Available : </span>
              {stock > 0 ? "In stock" : "Out of stock"}
            </p>
            <p className="info">
              <span>Code : </span>
              {sku}
            </p>
            <p className="info">
              <span>Brand : </span>
              {company}
            </p>
            <br />
            {stock > 0 && <AddtoCart product={product} />}
          </div>
        </div>
      </Container>
    </>
  );
};
export default Product;
