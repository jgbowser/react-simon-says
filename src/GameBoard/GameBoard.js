import React from 'react'
import GamePad from '../GamePad/GamePad'
import './GameBoard.css'

export default class GameBoard extends React.Component {
  render() {
    return (
      <div className="gameboard_container">
        <div className="top_row_pads">
          <GamePad color="green" />
          <GamePad color="red" />
        </div>
        <div className="bottom_row_pads">
          <GamePad color="yellow" />
          <GamePad color="blue" />
        </div>
      </div>
    )
  }
}