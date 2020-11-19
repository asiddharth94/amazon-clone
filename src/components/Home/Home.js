import React from "react";

import "./Home.css";
import bgImg from "./home-screen.jpg";
import Product from "../Product/Product";

function Home() {
  const titles = [
    "The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",
    "Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl",
    "Samsung LC49RG90SSUXEN 49' Curved LED Smart Watch",
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
            id="23343245"
            title={titles[0]}
            price="11.96"
            rating="5"
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="87342345"
            title={titles[1]}
            price="239"
            rating="4"
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="38485893"
            title={titles[2]}
            price="199.99"
            rating="3"
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="67583948"
            title={titles[3]}
            price="98.99"
            rating="5"
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="54673475"
            title={titles[4]}
            price="598.99"
            rating="4"
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="12343575"
            title={titles[5]}
            price="1094.98"
            rating="4"
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
