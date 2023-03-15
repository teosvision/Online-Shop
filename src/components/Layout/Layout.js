import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CssBaseline from "@mui/material/CssBaseline";

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
