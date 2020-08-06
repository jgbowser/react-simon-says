import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import LightBox from './LightBox'

describe('LightBox Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<LightBox />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  it('should render as white without any props passed in', () => {
    const tree = renderer
      .create(<LightBox />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('should render as green when green is passed in as a prop', () => {
    const tree = renderer
      .create(<LightBox color="green" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
