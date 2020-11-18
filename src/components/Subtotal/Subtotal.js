import React from "react";

import "./Subtotal.css";

function Subtotal() {
  return (
    <div className="subtotal">
      <div className="subtotal__details">
        <p className="subtotal__title">
          Subtotal ({"2"} items): <strong>${"260"}</strong>
        </p>
        <div className="gift-option">
          <input type="checkbox" />
          <span>This order contains a gift.</span>
        </div>
        <button className="checkout-button">Proceed to Checkout</button>
      </div>
    </div>
  );
}

export default Subtotal;
