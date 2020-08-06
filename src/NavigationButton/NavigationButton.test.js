import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { BrowserRouter } from 'react-router-dom'
import NavigationButton from './NavigationButton'

describe('NavigationButton Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><NavigationButton message="click me" /></BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})