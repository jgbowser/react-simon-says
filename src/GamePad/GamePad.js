import React from 'react'
import './GamePad.css'

export default class GamePad extends React.Component {
  render() {
    return (
      <div className="game_pad" style={{backgroundColor: this.props.color}}>

      </div>
    )
  }
}