import React from "react";
import "./homepage.styles.scss";

import GameList from "../../components/game-list/game-list.component";

const HomePage = () => (
  <div className="homepage">
    <GameList />
  </div>
);

export default HomePage;
