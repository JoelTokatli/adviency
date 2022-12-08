import { nanoid } from "nanoid";
import React, { useRef, useState, useEffect } from "react";
import "../Styles/GiftsCard.css";

const GiftsCard = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [gifts, setGifts] = useState([]);
  let ref = useRef(null);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    let data = parseFloat(quantity);
    if (data <= 0) {
      data = 1;
    } else if (data >= 1000) {
      data = 1000;
    }
    if (
      name.valueOf().trim().length <= 2 ||
      name.valueOf().trim().length <= 0 ||
      !name ||
      name.valueOf().trim().length >= 60
    ) {
      alert("El regalo no puede tener más de 60 carácteres o menos de 3");
    } else if (
      gifts.filter(
        (gift) =>
          gift.name.valueOf().trim().toLowerCase() ===
          name.valueOf().trim().toLowerCase()
      ).length > 0
    ) {
      alert("El regalo ya existe. 🤷‍♀️");
      ref.current.value = "";
      setName("");
    } else {
      gifts.length >= 10
        ? console.log(
            "Santa no tiene más dinero, no puedes pedir más regalos 😢"
          )
        : setGifts([
            ...gifts,
            {
              id: nanoid(6),
              name:
                name.valueOf().trim().charAt(0).toUpperCase() +
                name.valueOf().trim().slice(1).toLowerCase(),
              data,
            },
          ]),
        (ref.current.value = "");
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
      <h1>Adviency Challange #8</h1>
      <h2>¡Regalos navideños!</h2>
      <form className="form">
        <input
          type="text"
          className="form-input input-text"
          placeholder="Regalo..."
          ref={ref}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          id="number"
          required="required"
          min={1}
          max={1000}
          onChange={(e) => {
            setQuantity(e.target.value);
          }}
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
          const { id, name, data } = gift;
          return (
            <li className="list-item" key={id}>
              <p className="name">
                ❄ {``} {data} {``}
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
