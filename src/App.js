import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.scss";
import Header from "./components/header/header";
import HomePage from "./pages/homepage/homepage";
import GamePage from "./pages/gamepage/gamepage";
import SelectPage from "./pages/selectpage/selectpage";
import SearchPage from "./pages/searchpage/searchpage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pachete: [] };
  }

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/play/:id" component={GamePage} />
          <Route
            exact
            path="/select"
            render={(props) => (
              <SelectPage {...props} pachete={this.state.pachete} />
            )}
          />
          <Route exact path="/search" component={SearchPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
