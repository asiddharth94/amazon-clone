import React from "react";

import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../StateProvider";

import "./Subtotal.css";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  let totalPrice = 0;
  for (let item of basket) {
    totalPrice += Number(item.price);
  }

  return (
    <div className="subtotal">
      <div className="subtotal__details">
        <p className="subtotal__title">
          Subtotal ({basket.length} items):{" "}
          <CurrencyFormat
            className="total-price"
            value={totalPrice}
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
