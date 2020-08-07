import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import TurnIndicator from './TurnIndicator'

describe('TurnIndicator Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<TurnIndicator />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  it('renders Your turn. Good Luck! when passed PLAYER as a prop', () => {
    const tree = renderer
      .create(<TurnIndicator player="PLAYER" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('renders Simons turn... when passed COMPUTER as a prop', () => {
    const tree = renderer
      .create(<TurnIndicator player="COMPUTER" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})