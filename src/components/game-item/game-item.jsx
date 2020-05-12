import React from "react";
import "./game-item.scss";



const GameItem = ({ sezonul, etapa, autori, nr_intrebari, grey, first, selected, handleSelect }) => (
  <div className={`${grey ? "grey" : ""} ${first ? "first" : ""} ${selected.sezonul === sezonul && selected.etapa === etapa ? "selected" : ""} game-item`} onClick={(e) => handleSelect({ sezonul, etapa})}>
    <div className="game-item-characteristic">{sezonul}</div>
    <div className="game-item-characteristic">{etapa}</div>
    <div className="game-item-characteristic">{autori.join(", ")}</div>
    <div className="game-item-characteristic">{nr_intrebari}</div>
  </div>
);

export default GameItem;
