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
      </div>
    )
  }
}