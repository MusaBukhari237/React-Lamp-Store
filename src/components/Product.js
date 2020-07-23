import React from "react";
import Shoes from "./../shoes.json";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <h1 class="titlebar">Product</h1>
      <div className="productContainer">
        {Object.keys(Shoes).map((keyName) => {
          const shoe = Shoes[keyName];
          return (
            <Link key={keyName} className="link">
              <div class="box-title">
              <h2 class="product-title">{shoe.name}</h2>
              </div>
              <div class="box-img">
              <img class="product-img" src={shoe.img} alt="lamp"  />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
