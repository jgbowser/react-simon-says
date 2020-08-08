import React from 'react'
import './RoundHeader.css'
import GameContext from '../GameContext'

export default class RoundHeader extends React.Component {

  static contextType = GameContext

  render() {
    const { currentRound } = this.context
    return (
      <header className="round_header">
        <h1>Round: {currentRound}</h1>
      </header>
    )
  }
}