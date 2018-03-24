import React from 'react'
import Container from '../components/container.js'
import firebase from 'firebase'
import { Consumer } from '../state/store'

import { LOGIN_STARTED, LOGIN_SUCCESS, LOGIN_FAILURE } from '../state/app-actions.js'

const provider = new firebase.auth.TwitterAuthProvider()

class Login extends React.Component {
  handleSignup = e => {
    e.preventDefault()
    this.props.update({ type: LOGIN_STARTED })
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        const user = result.user
        this.props.update({
          type: LOGIN_SUCCESS,
          payload: user,
        })
      })
      .catch(error => {
        const { message } = error
        this.props.update({
          type: LOGIN_FAILURE,
          payload: message,
        })
      })
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

export default () => <Consumer>{({ dispatch, ...state }) => <Login update={dispatch} state={state} />}</Consumer>
