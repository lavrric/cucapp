import React from "react";
import "./game-item.scss";

const GameItem = ({
  sezonul,
  etapa,
  autori,
  nr_intrebari,
  grey,
  first,
  selected,
  handleSelect,
  id,
  nivel,
  id_tabel,
}) => {
  let color = "";
  switch (nivel) {
    case "Mediu":
      color = "rgb(255, 204, 0)";
      break;
    case "Dificil":
      color = "rgb(255, 102, 102)";
      break;
    case "Simplu":
      color = "#49ad40";
      break;
    default:
      color = "rgb(0,0,0)";
  }
  return (
    <div
      className={`${grey ? "grey" : ""}${first ? "first" : ""} ${
        selected === id ? "selected" : ""
      } game-item`}
      onClick={(e) => handleSelect(id)}
    >
      <div className="game-item-characteristic id">
        <span>{id_tabel}</span>
      </div>
      <div className="game-item-characteristic combinate">
        <span>
          {`${
            first ? sezonul : sezonul.substring(5, sezonul.length)
          } ─ ${etapa}`}{" "}
          <span style={{ color: color }}>({nivel})</span>
        </span>
      </div>
      <div className="game-item-characteristic sezonul">
        <span>{sezonul}</span>
      </div>
      <div className="game-item-characteristic etapa">
        <span>{etapa}</span>
      </div>
      <div className="game-item-characteristic autori">
        <span>{autori.join(", ")}</span>
      </div>
      <div
        className="game-item-characteristic nivel"
        style={{ color: color, fontWeight: first ? "regular" : "bold" }}
      >
        <span>{nivel}</span>
      </div>
      <div className="game-item-characteristic nr_intrebari">
        <span>{nr_intrebari}</span>
      </div>
    </div>
  );
};

export default GameItem;
