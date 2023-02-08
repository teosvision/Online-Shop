import React from "react";
import shtepia from "../../photo/shtepia.jpeg";
import njeriu from "../../photo/njeriu.jpeg";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Container from "@mui/material/Container";
const Part1 = () => {
  return (
    <Container maxWidth="lg">
      <div className="section-center">
        <article className="content">
          <h1>
            Design Your <br />
            Comfort Zone
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            iure quasi odit tenetur unde officiis repudiandae quod deserunt quia
            eum?
          </p>

          <Link className="btn" to="/products">
            Shop Now
          </Link>
        </article>
        <article className="img-container">
          <img src={shtepia} className="main-img" />
          <img src={njeriu} className="accent-img" />
        </article>
      </div>
    </Container>
  );
};

export default Part1;
