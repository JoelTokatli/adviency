import React, { useState, useRef, useEffect } from "react";
import { nanoid } from "nanoid";
import "../Styles/GiftsCard.css";
let data = [];
const GiftsCard = () => {
  const ref = useRef(null);
  const [gifts, setGifts] = useState(data);
  const [name, setName] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    if (
      !name ||
      name.valueOf().trim().length <= 2 ||
      name.valueOf().trim().length <= 0
    ) {
      alert("El regalo no puede tener un nombre con 2 carácteres o menos.");
    } else if (name.valueOf().trim().length >= 66) {
      alert("El regalo no puede tener más de 66 carácteres");
    } else {
      gifts.length >= 10
        ? console.log(
            "Santa no tiene tanto dinero, no puedes pedir más regalos. 😢"
          )
        : setGifts([
            ...gifts,
            {
              id: nanoid(6),
              name:
                name.toLowerCase().charAt(0).toUpperCase() +
                name.slice(1).toLowerCase(),
            },
          ]);
      setName("");
      ref.current.value = "";
    }
  };
  const eraseItem = (id) => {
    let filtered = gifts.filter((gift) => gift.id != id);
    setGifts(filtered);
  };
  return (
    <div className="gifts-container">
      <h2>¡Regalos Navideños!</h2>
      <form className="form">
        <input
          type="text"
          className="form-input"
          ref={ref}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="submit"
          className="form-input btn"
          onClick={(e) => {
            handleClick(e);
          }}
        />
      </form>
      <ul className="list">
        {gifts.map((gift) => {
          const { id, name } = gift;
          return (
            <li key={id} className="list-item">
              <h3 className="list-item-name">{name}</h3>
              <button
                className="btn"
                onClick={() => {
                  eraseItem(id);
                }}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default GiftsCard;
