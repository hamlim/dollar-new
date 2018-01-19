import React from 'react'

export default class Login extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
  }

  render() {
    return <form onSubmit={this.handleSubmit}>Login</form>
  }
}
