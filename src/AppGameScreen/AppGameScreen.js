import React from 'react'
import GameBoard from '../GameBoard/GameBoard'
import RoundHeader from '../RoundHeader/RoundHeader'
import TurnIndicator from '../TurnIndicator/TurnIndicator'
import GameContext from '../GameContext'
import './AppGameScreen.css'

export default class AppGameScreen extends React.Component {
  static contextType = GameContext
  render() {
    const { turn } = this.context
    return (
      <div className="game_screen_app">
        <RoundHeader />
        <GameBoard />
        <TurnIndicator player={turn} />
        {/* conditionally rendered fail screen with link to end screen when player loses */}
      </div>
    )
  }
}