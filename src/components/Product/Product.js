import React from "react";

import "./Product.css";

function Product(props) {
  const rating = [];
  for (let index = 0; index < Number(props.rating); index++) {
    rating.push(<p key={index}>⭐</p>);
  }

  return (
    <div className="product">
      <div className="product__container">
        <div className="product__info">
          <p className="product__title">{props.title}</p>
          <p className="product__price">
            <small>$</small>
            <strong>{props.price}</strong>
          </p>
          <div className="product__rating">{rating}</div>
        </div>
        <img className="product__image" src={props.imgSrc} alt="product" />
        <button className="add__button">Add to cart</button>
      </div>
    </div>
  );
}

export default Product;
