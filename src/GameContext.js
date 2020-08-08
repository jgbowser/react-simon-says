import React from 'react'

const GameContext = React.createContext({
  GAME_OVER: false,
  turn: 'COMPUTER',
  currentRound: '',
  sequence: [],
  playerInput: []
})

export default GameContext