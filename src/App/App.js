import React from 'react'
import { Route } from 'react-router-dom'
import StartScreen from '../StartScreen/StartScreen'
import GameScreen from '../GameScreen/GameScreen'
import EndScreen from '../EndScreen/EndScreen'
import AppStartScreen from '../AppStartScreen/AppStartScreen'
import './App.css'

function App() {
  return (
    <div className="App">
      <StartScreen>
        <Route exact path={'/'} component={AppStartScreen} />
      </StartScreen>
      
    </div>
  )
}

export default App
