import React, { useEffect, useState, useRef } from "react";
import data from "./gifts";
import "../Styles/GiftsCard.css";

const GiftsCard = () => {
  const ref = useRef(null);
  const [gifts, setGifts] = useState(data);
  const [giftName, setGiftName] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    if (
      !giftName ||
      giftName.valueOf().trim().length <= 0 ||
      giftName.valueOf().trim().length <= 2
    ) {
      alert("El regalo no puede tener menos de 2 caracteres");
    } else {
      gifts.length >= 12
        ? console.log(
            "Santa no tiene tanto dinero, no puedes pedir más regalos."
          )
        : setGifts([
            ...gifts,
            { id: gifts.length, name: giftName.toLowerCase() },
          ]);
      setGiftName("");
      ref.current.value = "";
    }
  };

  return (
    <div className="gifts-container">
      <h2 className="title">¡Regalos Navideños!</h2>
      <form className="form">
        <input
          className="form-input"
          placeholder="Regalo..."
          ref={ref}
          type="text"
          name="text"
          id="text"
          onChange={(e) => setGiftName(e.target.value)}
        />
        <input
          className="form-input btn"
          type="submit"
          value="Add Gift"
          onClick={(e) => {
            handleClick(e);
          }}
        />
      </form>
      <ul className="list">
        {gifts.map((gift) => {
          return (
            <li key={gift.id} className="list-item">
              <h4 className="name">{gift.name}</h4>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default GiftsCard;
