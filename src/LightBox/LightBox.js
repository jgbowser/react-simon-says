import React from 'react'
import './LightBox.css'

export default class LightBox extends React.Component {
  static defaultProps = {
    color: 'white'
  }
  render() {
    return (
      <div className="light_box" style={{backgroundColor: this.props.color}}></div>
    )
  }
}