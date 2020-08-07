import React from 'react'
import EndHeader from '../EndHeader/EndHeader'
import PostGameDetails from '../PostGameDetails/PostGameDetails'
import NavigationButton from '../NavigationButton/NavigationButton'

export default class AppEndScreen extends React.Component {
  render() {
    return (
      <div className="end_screen">
        <EndHeader />
        <PostGameDetails />
        <NavigationButton message="Try again" />
      </div>
    )
  }
}