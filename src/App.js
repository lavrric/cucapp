import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import HomePage from "./pages/homepage/homepage";
import GamePage from "./pages/gamepage/gamepage";
import SelectPage from "./pages/selectpage/selectpage";
import {firestore} from './firebase/firebase.utils'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { pachete: [] };
  }
  
  componentDidMount(){
    const sezoane = ['Camp 2017T','Camp 2018P','Camp 2018T','Camp 2019P','Camp 2019T'];
    const getPachete = async (sezon) => {
      let pachete = [];
      for(const sezon of sezoane){
        const snapshot = await firestore.collection(sezon).get();
        pachete.push(...snapshot.docs.map(doc => {
          const data = doc.data();
          return {
            sezonul: sezon,
            etapa: ((doc.id === 'Maraton') ? 'Et7' : doc.id),
            nivel: data.nivel,
            autori: data.autori,
            nr_intrebari: data.arr.length
          }
        }));
      }
      
      this.setState({ pachete });
    }
    getPachete();
  }
  
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/play" component={GamePage} />
          <Route exact path="/select" render={(props) => <SelectPage {...props} pachete={this.state.pachete} />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
