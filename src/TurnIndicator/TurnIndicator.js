import React from 'react'

export default class TurnIndicator extends React.Component {
  
  render() {

    const message = this.props.player === 'COMPUTER' ? "Simon's turn. Pay attention!" : "Your turn. Good luck!" 
    return (
      <div className="turn_indicator">
        <p>{message}</p>
      </div>
    )
  }
}