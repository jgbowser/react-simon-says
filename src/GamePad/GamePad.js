import React from 'react'
import './GamePad.css'
import GameContext from '../GameContext'

export default class GamePad extends React.Component {

  static contextType = GameContext
  render() {
    const {handlePadClick} = this.context

    return (
      <div 
        id={this.props.value} 
        className="game_pad" 
        style={{backgroundColor: this.props.color}} 
        onClick={() => handlePadClick(this.props.value)}
      >
      </div>
    )
  }
}