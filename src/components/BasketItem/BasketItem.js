import React from "react";
import { useStateValue } from "../../StateProvider";

import "./BasketItem.css";

function BasketItem({ id, title, image, price, rating }) {
  const ratings = [];
  for (let index = 0; index < Number(rating); index++) {
    ratings.push(<p key={index}>⭐</p>);
  }

  const [state, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="basket-item">
      <div className="basket-item__left">
        <img className="basket-item__image" src={image} alt="added product" />
      </div>
      <div className="basket-item__right">
        <p className="product__title">
          <strong>{title}</strong>
        </p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">{ratings}</div>
        <div className="remove__button" onClick={removeFromBasket}>
          Remove from Cart
        </div>
      </div>
    </div>
  );
}

export default BasketItem;
