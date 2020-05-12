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
}) => (
  <div
    className={`${grey ? "grey" : ""} ${first ? "first" : ""} ${
      selected.sezonul === sezonul && selected.etapa === etapa ? "selected" : ""
    } game-item`}
    onClick={(e) => handleSelect({ sezonul, etapa })}
  >
    <div className="game-item-characteristic id">{id}</div>
    <div className="game-item-characteristic sezonul">{sezonul}</div>
    <div className="game-item-characteristic etapa">{etapa}</div>
    <div className="game-item-characteristic autori">{autori.join(", ")}</div>
    <div className="game-item-characteristic nivel">{nivel}</div>
    <div className="game-item-characteristic nr_intrebari">{nr_intrebari}</div>
  </div>
);

export default GameItem;
