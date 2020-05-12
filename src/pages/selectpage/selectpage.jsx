import React, { Component } from 'react'
import { firestore } from '../../firebase/firebase.utils'
import GameList from '../../components/game-list/game-list'

export default class SelectPage extends Component {
    render() {
        return (
            <div>
                <GameList /> 
            </div>
        )
    }
}
