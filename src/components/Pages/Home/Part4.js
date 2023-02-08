import React from "react";
import Container from "@mui/material/Container";
import { TextField } from "@mui/material";
const Part4 = () => {
  return (
    <Container className="big-container4">
      <h2>Join our newsletter and get 20% off!</h2>

      <div className="inside-container">
        <div className="item">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            sint unde quaerat ratione soluta veniam provident adipisci cumque
            eveniet tempore?
          </p>
        </div>
        <div className="item">
          <form className="form-input">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Part4;
