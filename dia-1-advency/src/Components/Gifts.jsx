import React from "react";
import gifts from "./gifts";

const Gifts = () => {
  return (
    <ul className="list">
      <h1>¡Regalos Navideños!</h1>
      {gifts.map((element) => {
        const { name } = element;
        return (
          <li className="list-item">
            <h2>{name}</h2>
          </li>
        );
      })}
    </ul>
  );
};

export default Gifts;
