import React from "react";
import "./game-list.scss";

import GameItem from "../game-item/game-item";

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
    <div className="title">Pachete disponibile</div>
    <GameItem
      first
      key={0}
      competitia="Competitia"
      etapa="Etapa"
      desprePachet="Despre pachet"
      autori={["Autori"]}
      intrebari="Numarul de intrebari"
    />
    <div className="game-list-items">
      {testList.map(({ nivel, intrebari, ...otherProps }, i) => (
        <GameItem
          key={i + 1}
          grey={(i + 1) % 2}
          desprePachet={`Nivel ${nivel.toLowerCase()}, ${intrebari} intrebari`}
          {...otherProps}
        />
      ))}
    </div>
  </div>
);

export default GameList;
