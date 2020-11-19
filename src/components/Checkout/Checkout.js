import React from "react";
import { useStateValue } from "../../StateProvider";
import BasketItem from "../BasketItem/BasketItem";
import Subtotal from "../Subtotal/Subtotal";

import "./Checkout.css";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  let shoppingBasket = [];
  for (let item of basket) {
    shoppingBasket.push(
      <BasketItem
        key={item.id}
        id={item.id}
        title={item.title}
        image={item.image}
        price={item.price}
        rating={item.rating}
      />
    );
  }

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="checkout ad"
        />
        <h1 className="checkout__pageTitle">Your Shopping Cart</h1>
        <div className="checkout__products">{shoppingBasket}</div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
