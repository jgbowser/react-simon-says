import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import GamePad from './GamePad'

describe('GamePad Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<GamePad />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  it('renders a green background when passed green as a prop', () => {
    const tree = renderer
      .create(<GamePad color="green" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})