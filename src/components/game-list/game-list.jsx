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

class GameList extends React.Component{
  render(){
    return (
    <>
      <input type="text" placeholder="Cauta dupa sezon/etapa/autori/nivel" />
      <div className="game-list">
        <GameItem
          first
          key={0}
          competitia="Competitia"
          etapa="Etapa"
          nr_intrebari="Intrebari disponibile"
          autori={["Autori"]}
        />
        <div className="game-list-items">
          {testList.map(({ nivel, nr_intrebari, ...otherProps }, i) => (
            <GameItem
              key={i + 1}
              grey={(i + 1) % 2}
              nr_intrebari={nr_intrebari}
              {...otherProps}
            />
          ))}
        </div>
      </div>
    </>
    )
  }
}

export default GameList;
