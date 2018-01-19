import React, { Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/header.js'
import Login from './login/index.js'
import Form from './form/index.js'
import Analysis from './analysis/index.js'
import Firebase from 'firebase'

export default class App extends React.Component {
  state = {}
  update = reducer => action => {
    this.setState(state => reducer(state, action))
  }
  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <Switch>
            <Route path="/app" render={({ match }) => match && <Form update={this.update} state={this.state} />} />
            <Route
              path="/analysis"
              render={({ match }) => match && <Analysis update={this.update} state={this.state} />}
            />
            <Route path="/" exact render={({ match }) => match && <Login update={this.update} state={this.state} />} />
          </Switch>
        </Fragment>
      </Router>
    )
  }
}
