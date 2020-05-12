import React, { Component } from 'react'
import { firestore } from '../../firebase/firebase.utils'
import GameList from '../../components/game-list/game-list'
import UnfiredButton from './unfired-button'
import FiredButton from './fired-button'

export default class SelectPage extends Component {    
    constructor(props){
        super(props);
        this.state = { searchText: '' }
    }
    
    searchChange = (e) => {
        this.setState({ searchText: e.target.value });
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <GameList pachete={this.props.pachete} searchText={this.state.searchText} searchChange={this.searchChange}/> 
            </div>
        )
    }
}
