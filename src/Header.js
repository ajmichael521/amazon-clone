import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Person from "@material-ui/icons/Person";
import Home from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <>
      <div className="header">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />

        <div className="header__search">
          <input
            className="header__searchInput"
            type="text"
            placeholder="Search Amazon"
          />
          <SearchIcon className="header__searchIcon" />
        </div>
        <div className="header__nav">
          <Link to="/login">
            <div className="header__option">
              <span className="header__optionLineOne">Hello Guest</span>
              <span className="header__optionLineTwo">Sign In</span>
            </div>
          </Link>
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">&orders</span>
          </div>
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
          <Link className="header__optionBasket" to="/checkout">
            <div className="header__optionBasket">
              <ShoppingBasketIcon />
              <span className="header__optionLineTwo header__basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>

      <div className="subsection">
        <a className="link" href="/">
          <Home className="option1__home" />
          <span className="option1">Home</span>
        </a>

        <a className="link" id="login" href="/login">
          <Person className="option2__person" />
          <span className="option2">Sign In</span>
        </a>

        <LocationOnIcon className="option3__location" />
        <span className="option3">Deliver</span>
      </div>
    </>
  );
}

export default Header;
