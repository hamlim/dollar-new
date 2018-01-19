import React from 'react'

import Container from '../components/container.js'

export default class Login extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
  }

  render() {
    return (
      <Container>
        <form onSubmit={this.handleSubmit}>Login</form>
      </Container>
    )
  }
}
