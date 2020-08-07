import React from 'react'
import GameBoard from '../GameBoard/GameBoard'
import RoundHeader from '../RoundHeader/RoundHeader'
import './AppGameScreen.css'

export default class AppGameScreen extends React.Component {
  render() {
    return (
      <div className="game_screen_app">
        <RoundHeader />
        <GameBoard />
        {/* conditionally rendered fail screen with link to end screen when player loses */}
      </div>
    )
  }
}