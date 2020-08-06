import React from 'react'

export default class GameScreen extends React.Component {
  render() {
    return (
      <>
        {this.props.children}
      </>
    )
  }
}