import React, { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../../utils/data/data";
import Card from "./Card";
import "./home.scss";
const ProCard = () => {
  return (
    <div className="cardContainer">
      {products.map((product) => (
        <Card product={product} key={product.id}/>
      ))}
    </div>
  );
};

export default ProCard;
