import React from "react";

import CurrencyFormat from "react-currency-format";

import "./Subtotal.css";

function Subtotal() {
  return (
    <div className="subtotal">
      <div className="subtotal__details">
        <p className="subtotal__title">
          Subtotal ({0} items):{" "}
          <CurrencyFormat
            className="total-price"
            value={0}
            decimalScale={2}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
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
