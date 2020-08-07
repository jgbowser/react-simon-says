import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import AppEndScreen from './AppEndScreen'

describe('AppEndScreen Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><AppEndScreen /></BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})