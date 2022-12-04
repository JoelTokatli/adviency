import React from "react";
import gifts from "./gifts";
import "../Styles/GiftsCard.css";

const GiftsCard = () => {
  return (
    <div className="card">
      <h1 className="Title">¡Regalos navideños!</h1>
      <ul className="list">
        {gifts.map((element) => {
          const { name } = element;
          return (
            <li className="list-item">
              <h2 className="list-item-name">{name}</h2>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default GiftsCard;
