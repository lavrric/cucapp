import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import HomePage from "./pages/homepage/homepage";
import GamePage from "./pages/gamepage/gamepage";
import SelectPage from "./pages/selectpage/selectpage";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/play" component={GamePage} />
          <Route exact path="/select" component={SelectPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
