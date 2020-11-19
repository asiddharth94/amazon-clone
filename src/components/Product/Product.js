import React from "react";
import { useStateValue } from "../../StateProvider";

import "./Product.css";

function Product({ id, title, image, price, rating }) {
  const ratings = [];
  for (let index = 0; index < Number(rating); index++) {
    ratings.push(<p key={index}>⭐</p>);
  }

  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into data layer

    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__container">
        <div className="product__info">
          <p className="product__title">{title}</p>
          <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="product__rating">{ratings}</div>
        </div>
        <img className="product__image" src={image} alt="product" />
        <button onClick={addToBasket} className="add__button">
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Product;
