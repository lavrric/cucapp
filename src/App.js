import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import HomePage from "./pages/homepage/homepage";
import GamePage from "./pages/gamepage/gamepage";
import GameList from "./components/game-list/game-list";

class App extends React {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          {/* <Route exact path="/play" component={GamePage} /> */}
          {/* <Route exact path="/select" component={GameList} /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
