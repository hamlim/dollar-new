import React, { Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/header.js'
import Login from './login/index.js'
import Form from './form/index.js'
import Analysis from './analysis/index.js'
import firebase from 'firebase'
import firebaseConfig from './state/firebase-config'

import reducer from './state/app-reducer.js'

export default class App extends React.Component {
  state = {}
  update = action => {
    this.setState(state => reducer(state, action))
  }
  componentDidMount() {
    firebase.initializeApp(firebaseConfig)
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
