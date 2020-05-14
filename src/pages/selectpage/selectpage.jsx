import React, { Component } from "react";
import GameList from "../../components/game-list/game-list";

export default class SelectPage extends Component {
  constructor(props) {
    super(props);
    this.state = { searchText: "" };
  }

  searchChange = (e) => {
    this.setState({ searchText: e.target.value });
  };

  render() {
    return (
      <div>
        <GameList
          pachete={this.props.pachete}
          searchText={this.state.searchText}
          searchChange={this.searchChange}
        />
      </div>
    );
  }
}
