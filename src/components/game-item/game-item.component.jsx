import React from "react";
import "./game-item.styles.scss";

const GameItem = ({ competitia, etapa, autori, nivel, intrebari, grey }) => (
  <div className={`${grey ? "grey" : ""} game-item`}>
    <div className="game-item-characteristic">{competitia}</div>
    <div className="game-item-characteristic">{etapa}</div>
    <div className="game-item-characteristic">{autori.join(", ")}</div>
    <div className="game-item-characteristic">{nivel}</div>
    <div className="game-item-characteristic">{intrebari}</div>
  </div>
);

export default GameItem;
