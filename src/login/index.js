import React from 'react'
import Container from '../components/container.js'
import { Consumer } from '../state/store'

import Button from '@atlaskit/button'

import { actionCreators } from '../state/app-actions.js'

class Login extends React.Component {
  handleSignup = e => {
    e.preventDefault()
    this.props.update(actionCreators.login())
  }

  render() {
    return (
      <Container>
        <h2>Login</h2>
        <Button
          appearance="primary"
          onClick={this.handleSignup}
        >
          Login
        </Button>
      </Container>
    )
  }
}

export default () => (
  <Container>
    <Consumer>
      {({ dispatch, ...state }) => (
        <Login update={dispatch} state={state} />
      )}
    </Consumer>
  </Container>
)
