import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__sub">
        <a href="#top">Top of Page</a>
      </div>
      <div className="footer__container">
        <div className="footer__left">
          <ul>
            <li>
              <h5>Get to know Us</h5>
            </li>
            <li>Careers</li>
            <li>Blog</li>
            <li>About Amazon</li>
            <li>Investor Relations</li>
            <li>Amazon Device</li>
          </ul>
        </div>
        <div className="footer__center">
          <ul>
            <li>
              <h5>Make Money With Us</h5>
            </li>
            <li>Sell products on Amazon</li>
            <li>Sell on Amazon Buisness</li>
            <li>Sell Apps on Amazon</li>
            <li>Become an Affiliate</li>
            <li>Advertise Your Products</li>
            <li>Self Publish with us</li>
            <li>Host on Amazon hub</li>
          </ul>
        </div>
        <div className="footer__right">
          <ul>
            <li>
              <h5>Amazon Payments Products</h5>
            </li>
            <li>Amazon Buisness Card</li>
            <li>Shop With Points</li>
            <li>Reload with Your Balance</li>
            <li>Amazon currency converter</li>
            <li>Amazon Global</li>
          </ul>
        </div>
      </div>
      <div className="footer__footer">
        <img
          className="footer__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
        <button>English</button>
        <button>$ USD- U.S.dollar</button>
        <button className="hide">United states</button>
      </div>
      <p>&copy; 1966-2021,Amazon.com,inc.</p>
    </div>
  );
}

export default Footer;
