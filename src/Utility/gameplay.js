

// Need: overall game loop function; contains:
// Computer turn function: pushes random number to computer array
// Player turn function: compares a fresh array for each turn to the computer array on each action
// manage GAME_OVER in state. loop game while GAME_OVER === false
// when player makes a mistake setState GAME_OVER to true.

// once gameplay functionality is built out work on display (light up buttons, etc) functionality. Probably in a different file

//algo for comparing player input to sequence: <ClickedButtonValue> === this.state.sequence[this.state.playerInput.length] < --- should compare the correct index of each array

function gameLoop(sequence, playerInput) {
  // call in componentDidMount in AppGameScreen
  computerTurn(sequence)
  playerTurn(playerInput)
}

function computerTurn(sequence) {
  let prevSequence = [...sequence]
  // add button to array
  // loop through array and light up corresponding buttons (display.js)
  prevSequence.push(Math.floor(Math.random() * 5))
}

function playerTurn() {
  return 'hello world'
}

