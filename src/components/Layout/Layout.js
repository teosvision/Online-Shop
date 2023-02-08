import React from "react";
// import { Container } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
const Layout = (props) => {
  return (
    <>
      <CssBaseline />
      <div>
        {props.children}
        <ToastContainer />
      </div>
    </>
  );
};

export default Layout;
