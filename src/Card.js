import React from "react";
import "./Card.css";

const Card = ({ image, title }) => {
  return (
    <div className="card-container">
      <img src={image}></img>
      <h1>{title}</h1>
    </div>
  );
};

export default Card;
