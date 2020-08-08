import React from 'react'
import { Route } from 'react-router-dom'
import AppStartScreen from '../AppStartScreen/AppStartScreen'
import AppGameScreen from '../AppGameScreen/AppGameScreen'
import AppEndScreen from '../AppEndScreen/AppEndScreen'
import './App.css'
import GameContext from '../GameContext'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      GAME_OVER: false,
      turn: 'COMPUTER',
      currentRound: '1',
      sequence: [],
      playerInput: []
    }
  }

  handlePadClick = (value) => {
    //most likely will be calling playerTurn() here to handle logic
    this.setState({playerInput: [...this.state.playerInput, value]})
  }

  render() {
    const value ={
      GAME_OVER: this.state.GAME_OVER,
      turn: this.state.turn,
      currentRound: this.state.currentRound,
      sequence: this.state.sequence,
      playerInput: this.state.playerInput,
      handlePadClick: this.handlePadClick
    }

    

    return (
      <GameContext.Provider value={value}>
        <div className="App">
            <Route exact path={'/'} component={AppStartScreen} />
            <Route exact path={'/play'} component={AppGameScreen} />
            <Route exact path={'/game-over'} component={AppEndScreen} />
        </div>
      </GameContext.Provider>
    )
  }
}

export default App
