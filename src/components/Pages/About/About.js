import { Container } from "@mui/material";
import React from "react";
import RoutePage from "../../special-components/RoutePage";
import fotokomedine from "../../photo/fotokomedine.jpg";
const About = () => {
  return (
    <>
      <RoutePage title="About" />
      <Container>
        <div className="about-container">
          <img className="photo" src={fotokomedine} alt="" />
          <div className="description">
            <h2>About Us</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              accusantium sapiente tempora sed dolore esse deserunt eaque
              excepturi, delectus error accusamus vel eligendi, omnis beatae.
              Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
              dolore, obcaecati incidunt sequi blanditiis est exercitationem
              molestiae delectus saepe odio eligendi modi porro eaque in libero
              minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
              ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
              similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
              iste.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default About;
