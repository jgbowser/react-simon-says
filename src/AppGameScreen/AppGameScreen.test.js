import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import AppGameScreen from './AppGameScreen'

describe('AppGameScreen Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<AppGameScreen />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<AppGameScreen />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})