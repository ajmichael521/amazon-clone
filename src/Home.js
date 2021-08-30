import React from "react";
import "./Home.css";
import Product from "./Product";
import CarouselContainer from "./CarouselContainer";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <CarouselContainer id="top" className="home__image" />
        <span className="intro">
          <p>Today Selection</p>
        </span>
        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses Hardcover-"
            image="https://m.media-amazon.com/images/I/81vvgZqCskL._AC_SS130_.jpg"
            price={29.9}
            rating={5}
          />
          <Product
            id="49538094"
            title="VTech KidiZoom Creator Cam , Red-
            Create awesome videos and edit like a pro with this high-definition video camera kit."
            image="https://m.media-amazon.com/images/I/71n9KAJPRZL._AC_SX569_.jpg"
            price={49.99}
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="12332111"
            title="VTech KidiZoom Smartwatch DX2, Black (Amazon Exclusive) The KidiZoom Smartwatch DX2 looks just like a grown-up watch. "
            image="https://m.media-amazon.com/images/I/71KYDouQCEL._AC_SX569_.jpg"
            price={55.84}
            rating={5}
          />
          <Product
            id="09098765"
            title="Instant Pot Duo 7-in-1 Electric Pressure Cooker, Slow Cooker, Rice Cooker, Steamer, Saute, Yogurt Maker, Sterilizer, and Warmer."
            image="https://m.media-amazon.com/images/I/71WtwEvYDOS._AC_SX522_.jpg"
            price={69.95}
            rating={5}
          />
          <Product
            id="45677676"
            title="Oculus Quest 2 — Advanced All-in-One Virtual Reality Headset"
            image="https://m.media-amazon.com/images/I/615YaAiA-ML._AC_SX425_.jpg"
            price={572.89}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="78686768"
            title="SAMSUNG 65-Inch Class Crystal UHD AU8000 Series"
            image="https://m.media-amazon.com/images/I/71LJJrKbezL._AC_SX679_.jpg"
            price={9.9}
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="56565656"
            title="Paladone Gameboy Heat Changing Coffee Mug."
            image="https://m.media-amazon.com/images/I/71alMT8fYrL._AC_SX522_.jpg"
            price={59.99}
            rating={5}
          />
          <Product
            id="090909099"
            title="Fjallraven, Kanken Classic Backpack for Everyday, Graphite"
            image="https://m.media-amazon.com/images/I/71gjJZ4Df2L._AC_SX425_.jpg"
            price={79.0}
            rating={5}
          />
          <Product
            id="232323232"
            title="Apple Lightning to 3.5 mm Headphone Jack Adapter"
            image="https://m.media-amazon.com/images/I/31mmFtpMqOL._AC_SY445_.jpg"
            price={12.48}
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="454545455"
            title="Hasbro Marvel Legends Series Venom 6-inch Collectible Action Figure Toy"
            image="https://m.media-amazon.com/images/I/71paLqMonlL._AC_SX425_.jpg"
            price={36.99}
            rating={5}
          />
          <Product
            id="212121211"
            title="OtterBox Commuter Series Case for iPhone Xs & iPhone X - Retail Packaging - Ballet Way (Pink Salt/Blush)"
            image="https://m.media-amazon.com/images/I/414Tqe+WZ5L._AC_SY580_.jpg"
            price={31.99}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

/*<img
  className="home__image"
  src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_2x._CB429090087_.jpg"
  alt=""
/>;*/
