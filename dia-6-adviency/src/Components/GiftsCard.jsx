import { nanoid } from "nanoid";
import React, { useRef, useState } from "react";
import "../Styles/GiftsCard.css";
const GiftsCard = () => {
  const [name, setName] = useState("");
  const [gifts, setGifts] = useState([]);
  let ref = useRef(null);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (
      name.valueOf().trim().length <= 2 ||
      name.valueOf().trim().length <= 0 ||
      !name ||
      name.valueOf().trim().length >= 60
    ) {
      alert("El regalo no puede tener más de 60 carácteres o menos de 3");
    } else {
      gifts.length >= 10
        ? console.log(
            "Santa no tiene más dinero, no puedes pedir más regalos 😢"
          )
        : setGifts([
            ...gifts,
            {
              id: nanoid(6),
              name: name.charAt(0).toUpperCase() + name.slice(1).toLowerCase(),
            },
          ]);
      ref.current.value = "";
      setName("");
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
      <h1>Adviency Challange #6</h1>
      <h2>¡Regalos navideños!</h2>
      <form className="form">
        <input
          type="text"
          className="form-input input-text"
          ref={ref}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="submit"
          value="Añadir 🎁"
          className="form-input input-btn"
          onClick={(e) => {
            handleClick(e);
          }}
        />
      </form>
      <p className={`${gifts.length >= 1 ? "hide" : "show"}`}>
        Parece qué aún no hay regalos, añade el primer regalo ✨
      </p>
      <ul className="list">
        {gifts.map((gift) => {
          const { id, name } = gift;
          return (
            <li className="list-item" key={id}>
              <p className="name">
                ❄ {``}
                {name}
              </p>
              <button
                className="erase btn"
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
      <button className="erase-all btn" onClick={() => eraseAll()}>
        Borrar todo
      </button>
    </div>
  );
};

export default GiftsCard;
