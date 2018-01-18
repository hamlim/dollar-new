import React from 'react'

export default class App extends React.Component {
  state = {
    clicked: false,
  }
  update = () => {
    this.setState(({ clicked }) => ({ clicked: !clicked }))
  }
  render() {
    return (
      <div>
        <button onClick={this.update}>Toggle is {this.state.clicked ? 'On' : 'Off'}</button>
      </div>
    )
  }
}
