import React from 'react'
import Container from '../components/container.js'
import { Consumer } from '../state/store'

import { actionCreators } from '../state/app-actions.js'

class Login extends React.Component {
  handleSignup = e => {
    e.preventDefault()
    // this.props.update({ type: LOGIN_STARTED })
    this.props.update(actionCreators.loginStart())
    // firebase
    //   .auth()
    //   .signInWithPopup(provider)
    //   .then(result => {
    //     const user = result.user
    //   })
    //   .catch(error => {
    //     const { message } = error
    //     this.props.update({
    //       type: LOGIN_FAILURE,
    //       payload: message,
    //     })
    //   })
    this.props.update(actionCreators.loginDone())
  }

  render() {
    return (
      <Container>
        <h2>Login</h2>
        <button onClick={this.handleSignup}>Login</button>
      </Container>
    )
  }
}

export default () => (
  <Consumer>
    {({ dispatch, ...state }) => (
      <Login update={dispatch} state={state} />
    )}
  </Consumer>
)
