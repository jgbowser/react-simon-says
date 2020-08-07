import React from 'react'
import ReactDOM from 'react-dom'
import RoundHeader from './RoundHeader'

describe('RoundHeader Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<RoundHeader />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})