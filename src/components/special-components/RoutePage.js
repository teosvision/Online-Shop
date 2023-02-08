import { Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const RoutePage = ({ title, product }) => {
  return (
    <div className="routpage-background">
      <Container className="route-page">
        <h4>
          <Link to="/">Home</Link>
          {product && <Link to="/products">/ Products</Link>}/ {title}
        </h4>
      </Container>
    </div>
  );
};

export default RoutePage;
