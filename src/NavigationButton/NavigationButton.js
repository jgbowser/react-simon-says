import React from 'react'
import { Link } from 'react-router-dom'

export default class NavigationButton extends React.Component {
  render() {
    return (
      <div className="btn_container">
        <Link to={'/play'} className="link_button">
          {this.props.message}
        </Link>
      </div>
    )
  }
}