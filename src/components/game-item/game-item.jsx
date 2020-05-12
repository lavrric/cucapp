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
      color = "rgb(102, 255, 51)";
      break;
    default:
      color = "rgb(0,0,0)";
  }
  return (
    <div
      className={`${grey ? "grey" : ""} ${first ? "first" : ""} ${
        selected.sezonul === sezonul && selected.etapa === etapa
          ? "selected"
          : ""
      } game-item`}
      onClick={(e) => handleSelect({ sezonul, etapa })}
    >
      <div className="game-item-characteristic id">{id}</div>
      <div className="game-item-characteristic sezonul">{sezonul}</div>
      <div className="game-item-characteristic etapa">{etapa}</div>
      <div className="game-item-characteristic autori">{autori.join(", ")}</div>
      <div
        className="game-item-characteristic nivel"
        style={{ color: color, "font-weight": first ? "regular" : "bold" }}
      >
        {nivel}
      </div>
      <div className="game-item-characteristic nr_intrebari">
        {nr_intrebari}
      </div>
    </div>
  );
};

export default GameItem;
