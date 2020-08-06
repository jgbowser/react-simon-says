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
  it('should display the corresponding string that is passed as a prop', () => {
    const tree = renderer
      .create(<BrowserRouter><NavigationButton message="Start Game" /></BrowserRouter>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})