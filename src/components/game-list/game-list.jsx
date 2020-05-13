import React from "react";
import "./game-list.scss";
import normalize from "../../functions/normalize";

import GameItem from "../game-item/game-item";
import UnfiredButton from "../../pages/selectpage/unfired-button";
import FiredButton from "../../pages/selectpage/fired-button";

class GameList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: 4206942 };
  }

  handleSelect = (id) => {
    if (this.state.selected === id) {
      this.setState({ selected: 4206942 });
    } else this.setState({ selected: id });
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
          id_tabel="#"
          id={42069}
          sezonul="Sezonul"
          etapa="Etapa"
          nr_intrebari="Intrebari disponibile"
          autori={["Autori"]}
          selected={this.state.selected}
          nivel="Nivel"
          handleSelect={() => null}
        />
        <div className="game-list-items">
          {this.props.pachete.map(({ ...otherProps }, i) =>
            normalize(otherProps.sezonul).includes(searchText) ||
            normalize(otherProps.etapa).includes(searchText) ||
            normalize(otherProps.autori.toString()).includes(searchText) ? (
              <GameItem
                handleSelect={this.handleSelect}
                selected={this.state.selected}
                key={i + 1}
                id_tabel={i + 1}
                grey={(i + 1) % 2}
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
