import React from "react";

import "./Home.css";
import bgImg from "./home-screen.jpg";
import Product from "../Product/Product";
import productOne from "./product-one.jpg";

function Home() {
  const titles = [
    "The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",
    "Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl",
    "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor",
    "Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",
    "New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",
    "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",
  ];

  return (
    <div className="home">
      <div className="container">
        <img className="background__image" src={bgImg} alt="home screen" />
        <div className="home__row">
          <Product
            title={titles[0]}
            price="11.96"
            rating="5"
            imgSrc={productOne}
          />
          <Product
            title={titles[1]}
            price="239"
            rating="4"
            imgSrc={productOne}
          />
        </div>
        <div className="home__row">
          <Product
            title={titles[2]}
            price="199.99"
            rating="3"
            imgSrc={productOne}
          />
          <Product
            title={titles[3]}
            price="98.99"
            rating="5"
            imgSrc={productOne}
          />
          <Product
            title={titles[4]}
            price="598.99"
            rating="4"
            imgSrc={productOne}
          />
        </div>
        <div className="home__row">
          <Product
            title={titles[5]}
            price="1094.98"
            rating="4"
            imgSrc={productOne}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
