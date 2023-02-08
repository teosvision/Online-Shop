import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <h5>
        &copy; {new Date().getFullYear()}
        <span className="theshop">Top-Shop.</span>
      </h5>
      <h5>All rights reserved</h5>
    </div>
  );
};

export default Footer;
