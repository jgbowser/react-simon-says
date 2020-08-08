import React from 'react'
import GamePad from '../GamePad/GamePad'
import './GameBoard.css'

export default class GameBoard extends React.Component {
  render() {
    return (
      <div className="gameboard_container">
        <div className="top_row_pads">
          <GamePad color="green" value='1'/>
          <GamePad color="red" value='2' />
        </div>
        <div className="bottom_row_pads">
          <GamePad color="yellow" value='3'/>
          <GamePad color="blue" value='4' />
        </div>
      </div>
    )
  }
}