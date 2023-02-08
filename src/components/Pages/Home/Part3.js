import React from "react";
import icon1 from "../../photo/icon1.png";
import icon2 from "../../photo/icon2.png";
import icon3 from "../../photo/icon3.png";
import Container from "@mui/material/Container";
const Part3 = () => {
  return (
    <div className="container-3">
      <Container className="big-container3">
        <div className="container3">
          <h2>
            Custom Furniture <br /> Built Only For You
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum debitis consectetur reprehenderit non aliquam voluptates
            dolore aut vero consequuntur.
          </p>
        </div>
        <div className="container3-inside">
          <div className="card">
            <div className="icon">
              <img src={icon3} />
            </div>
            <h3>Mission</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum
              velit autem unde numquam nisi
            </p>
          </div>

          <div className="card">
            <div className="icon">
              <img src={icon2} />
            </div>
            <h3>Vision</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum
              velit autem unde numquam nisi
            </p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={icon1} />
            </div>
            <h3>History</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum
              velit autem unde numquam nisi
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Part3;
