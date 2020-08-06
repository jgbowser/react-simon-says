import React from 'react'
import Header from '../Header/Header'
import Instructions from '../Instructions/Instructions'
import LightBox from '../LightBox/LightBox'
import NavigationButton from '../NavigationButton/NavigationButton'
import './AppStartScreen.css'

export default class AppStartScreen extends React.Component {
  render() {
    return (
      <div className="start_screen_app">
        <Header />
        <Instructions />
        <div className="light_box__container">
          <div className="top_row">
            <LightBox color="green" />
            <LightBox color="red" />
          </div>
          <div className="bottom_row">
            <LightBox color="yellow" />
            <LightBox color="blue" />
          </div>
        </div>
        <NavigationButton message="New Game" />
      </div>
    )
  }
}