import React from 'react'
import ReactDOM from 'react-dom'
import EndHeader from './EndHeader'

describe('EndHeader Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<EndHeader />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})