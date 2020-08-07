import React from 'react'
import { Route } from 'react-router-dom'
import AppStartScreen from '../AppStartScreen/AppStartScreen'
import AppGameScreen from '../AppGameScreen/AppGameScreen'
import AppEndScreen from '../AppEndScreen/AppEndScreen'
import './App.css'

function App() {
  return (
    <div className="App">
        <Route exact path={'/'} component={AppStartScreen} />
        <Route exact path={'/play'} component={AppGameScreen} />
        <Route exact path={'/game-over'} component={AppEndScreen} />
    </div>
  )
}

export default App
