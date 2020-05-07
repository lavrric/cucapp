import React from "react";
import "./game-list.styles.scss";

import GameItem from "../game-item/game-item.component";

let testList = [
  {
    competitia: "Camp 2019T",
    etapa: "Maraton",
    autori: ["Geronimo", "KKK", "Squadra"],
    nivel: "mediu",
    intrebari: 69,
  },
  {
    competitia: "Camp 2019T",
    etapa: "Maraton",
    autori: ["Geronimo", "KKK", "Squadra"],
    nivel: "mediu",
    intrebari: 69,
  },

  {
    competitia: "Camp 2019T",
    etapa: "Maraton",
    autori: ["Geronimo", "KKK", "Squadra"],
    nivel: "mediu",
    intrebari: 69,
  },

  {
    competitia: "Camp 2019T",
    etapa: "Maraton",
    autori: ["Geronimo", "KKK", "Squadra"],
    nivel: "mediu",
    intrebari: 69,
  },
  {
    competitia: "Camp 2019T",
    etapa: "Maraton",
    autori: ["Geronimo", "KKK", "Squadra"],
    nivel: "mediu",
    intrebari: 69,
  },
  {
    competitia: "Camp 2019T",
    etapa: "Maraton",
    autori: ["Geronimo", "KKK", "Squadra"],
    nivel: "mediu",
    intrebari: 69,
  },
  {
    competitia: "Camp 2019T",
    etapa: "Maraton",
    autori: ["Geronimo", "KKK", "Squadra"],
    nivel: "mediu",
    intrebari: 69,
  },
  {
    competitia: "Camp 2019T",
    etapa: "Maraton",
    autori: ["Geronimo", "KKK", "Squadra"],
    nivel: "mediu",
    intrebari: 69,
  },
  {
    competitia: "Camp 2019T",
    etapa: "Maraton",
    autori: ["Geronimo", "KKK", "Squadra"],
    nivel: "mediu",
    intrebari: 69,
  },
  {
    competitia: "Camp 2019T",
    etapa: "Maraton",
    autori: ["Geronimo", "KKK", "Squadra"],
    nivel: "mediu",
    intrebari: 69,
  },
  {
    competitia: "Camp 2019T",
    etapa: "Maraton",
    autori: ["Geronimo", "KKK", "Squadra"],
    nivel: "mediu",
    intrebari: 69,
  },
  {
    competitia: "Camp 2019T",
    etapa: "Maraton",
    autori: ["Geronimo", "KKK", "Squadra"],
    nivel: "mediu",
    intrebari: 69,
  },
];

const GameList = () => (
  <div className="game-list">
    <GameItem
      key={0}
      competitia="Competitia"
      etapa="Etapa"
      nivel="Nivel"
      autori={["Autori"]}
      intrebari="Numarul de intrebari"
    />
    <div className="game-list-items">
      {testList.map(({ ...otherProps }, i) => (
        <GameItem key={i + 1} grey={(i + 1) % 2} {...otherProps} />
      ))}
    </div>
  </div>
);

export default GameList;
