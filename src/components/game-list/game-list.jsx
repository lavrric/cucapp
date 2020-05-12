import React from "react";
import "./game-list.scss";
import normalize from "../../functions/normalize";

import GameItem from "../game-item/game-item";
import UnfiredButton from "../../pages/selectpage/unfired-button";
import FiredButton from "../../pages/selectpage/fired-button";

class GameList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: { sezonul: "", etapa: "" } };
  }

  handleSelect = (obj) => {
    let now = this.state.selected;
    if (now.sezonul === obj.sezonul && now.etapa === obj.etapa) {
      this.setState({ selected: { sezonul: "", etapa: "" } });
    } else this.setState({ selected: obj });
  };

  render() {
    const searchText = normalize(this.props.searchText);
    return (
      <div className="game-list">
        <input
          type="text"
          placeholder="Cauta dupa sezon, etapa, autori.."
          value={this.props.searchText}
          onChange={(e) => this.props.searchChange(e)}
        />
        <GameItem
          first
          key={0}
          id="#"
          sezonul="Sezonul"
          etapa="Etapa"
          nr_intrebari="Intrebari disponibile"
          autori={["Autori"]}
          selected={this.state.selected}
          nivel="Nivel"
          handleSelect={() => null}
        />
        <div className="game-list-items">
          {this.props.pachete.map(({ nivel, nr_intrebari, ...otherProps }, i) =>
            normalize(otherProps.sezonul).includes(searchText) ||
            normalize(otherProps.etapa).includes(searchText) ||
            normalize(otherProps.autori.toString()).includes(searchText) ? (
              <GameItem
                id={`${i + 1}`}
                handleSelect={this.handleSelect}
                selected={this.state.selected}
                key={i + 1}
                grey={(i + 1) % 2}
                nr_intrebari={nr_intrebari}
                nivel={nivel}
                {...otherProps}
              />
            ) : (
              <></>
            )
          )}
        </div>
        {this.state.selected.sezonul === "" ? (
          <UnfiredButton>JOACA</UnfiredButton>
        ) : (
          <FiredButton>JOACA</FiredButton>
        )}
      </div>
    );
  }
}

export default GameList;
