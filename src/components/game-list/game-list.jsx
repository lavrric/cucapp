import React from "react";
import "./game-list.scss";
import normalize from '../../functions/normalize'

import GameItem from "../game-item/game-item";

class GameList extends React.Component{
  constructor(props){
    super(props);
    this.state = { selected: {sezonul: '', etapa: ''} };
  }
  
  handleSelect = (obj) => {
    let now = this.state.selected;
    if(now.sezonul === obj.sezonul && now.etapa === obj.etapa){
      this.setState({ selected: { sezonul: '', etapa: '' } });
    }
    else this.setState({selected: obj});
  }

  render(){
    const searchText = normalize(this.props.searchText);
    return (
    <>
      <input type="text" placeholder="Cauta dupa sezon/etapa/autori/nivel" value={this.props.searchText} onChange={e => this.props.searchChange(e)}/>
      <div className="game-list">
        <GameItem
          first
          key={0}
          sezonul="Sezonul"
          etapa="Etapa"
          nr_intrebari="Intrebari disponibile"
          autori={["Autori"]}
          selected={this.state.selected}
          handleSelect={()=>null}
        />
        <div className="game-list-items">
          {this.props.pachete.map(({ nivel, nr_intrebari, ...otherProps }, i) => (         
              ( normalize(otherProps.sezonul).includes(searchText) || 
                normalize(otherProps.etapa).includes(searchText) ||
                normalize(otherProps.autori.toString()).includes(searchText)
              ) ?
              <GameItem
                handleSelect={this.handleSelect}
                selected={this.state.selected}
                key={i + 1}
                grey={(i + 1) % 2}
                nr_intrebari={nr_intrebari}
                {...otherProps}
              />
              :
              <></>
          ))}
        </div>
      </div>
    </>
    )
  }
}

export default GameList;
