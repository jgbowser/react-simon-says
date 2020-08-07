import React from 'react'
import ReactDOM from 'react-dom'
import PostGameDetails from './PostGameDetails'

describe('PostGameDetails Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<PostGameDetails />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})