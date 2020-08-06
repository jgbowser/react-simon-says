import React from 'react'
import ReactDOM from 'react-dom'
import StartHeader from './StartHeader'

describe('StartHeader Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<StartHeader />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})