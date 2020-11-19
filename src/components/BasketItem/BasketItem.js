import React from "react";

import "./BasketItem.css";

function BasketItem({ id, title, image, price, rating }) {
  const ratings = [];
  for (let index = 0; index < Number(rating); index++) {
    ratings.push(<p key={index}>⭐</p>);
  }
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
      </div>
    </div>
  );
}

export default BasketItem;
