import React, { useState, useRef } from "react";
import { nanoid } from "nanoid";
import { BsTrash, BsGift } from "react-icons/bs";
import { HiXMark } from "react-icons/hi2";
import "../Styles/GiftsCard.css";
const GiftsCard = () => {
  let ref = useRef(null);
  const [gifts, setGifts] = useState([]);
  const [name, setName] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    if (
      !name ||
      name.valueOf().trim().length <= 2 ||
      name.valueOf().trim().length <= 0 ||
      name.valueOf().trim().length >= 60
    ) {
      alert("El regalo no puede tener menos de 2 ó más de 60 carácteres.");
    } else {
      gifts.length >= 12
        ? console.log(
            "Santa no tiene tanto dinero, no puedes pedir más regalos. 😢"
          )
        : setGifts([
            ...gifts,
            {
              id: nanoid(6),
              name: name.charAt(0).toUpperCase() + name.slice(1).toLowerCase(),
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

  const eraseAll = () => {
    setGifts([]);
  };

  return (
    <div className="container">
      <h1>Adviency Challange #5</h1>
      <h2>¡Regalos Navideños!</h2>
      <form className="form">
        <input
          type="text"
          className="form-input input-text"
          ref={ref}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          className="form-input input-btn"
          type="submit"
          value={`Añadir 🎁`}
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
              <h4>{name}</h4>
              <button className="erase btn" onClick={() => eraseItem(id)}>
                {<HiXMark />}
              </button>
            </li>
          );
        })}
      </ul>
      <button
        className="erase-all btn"
        onClick={() => {
          eraseAll();
        }}
      >
        Clear All
      </button>
    </div>
  );
};

export default GiftsCard;
