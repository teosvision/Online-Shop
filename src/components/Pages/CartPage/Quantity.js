import React from "react";

const Quantity = ({ amount, increase, decrease }) => {
  return (
    <div className="amount-btn">
      <button type="button" className="button" onClick={decrease}>
        -
      </button>
      <h3>{amount}</h3>
      <button type="button" className="button" onClick={increase}>
        +
      </button>
    </div>
  );
};

export default Quantity;
