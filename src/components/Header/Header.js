import React from "react";

import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import "./Header.css";
import logo from "./amazon-logo.jpg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link className="header__logo" to="/">
        <img className="header__logoImage" src={logo} alt="amazon-logo" />
      </Link>
      <div className="header__search">
        <input type="text" />
        <div className="header__search-icon">
          <SearchIcon />
        </div>
      </div>
      <div className="header__nav">
        <div className="header__nav-options">
          <span className="header__nav-options-lineOne">Hello Guest,</span>
          <br />
          Sign in
        </div>
        <div className="header__nav-options">
          <span className="header__nav-options-lineOne">Returns</span>
          <br />& Orders{" "}
        </div>
        <div className="header__nav-options">
          <span className="header__nav-options-lineOne">Your</span>
          <br />
          Prime
        </div>
        <div className="header__nav-cart">
          <Link className="cart-icon" to="/checkout">
            <ShoppingCartIcon />
          </Link>{" "}
          <span className="cart-count">{"0"}</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
