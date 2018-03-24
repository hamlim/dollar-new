import React, { Fragment } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { Provider, Consumer } from './state/store'
import Header from './components/header.js'
import Login from './login/index.js'
import Form from './form/index.js'
import Analysis from './analysis/index.js'
import firebase from 'firebase'
import firebaseConfig from './state/firebase-config'

class DispatchOnMount extends React.Component {
  componentDidMount() {
    this.props.onMount()
  }
  render() {
    return null
  }
}

export default class App extends React.Component {
  componentDidMount() {
    firebase.initializeApp(firebaseConfig)
  }
  render() {
    return (
      <Router>
        <Provider>
          <Fragment>
            <Header />
            <Switch>
              <Route
                path="/app"
                render={({ match }) => match && <Form />}
              />
              <Route
                path="/analysis"
                render={({ match }) =>
                  match && <Analysis />
                }
              />
              <Route
                path="/"
                exact
                render={({ match }) =>
                  match && (
                    <Fragment>
                      <Login />
                      <Consumer>
                        {({ login }) =>
                          login === 'done' && (
                            <Redirect to="/app" />
                          )
                        }
                      </Consumer>
                    </Fragment>
                  )
                }
              />
            </Switch>
          </Fragment>
        </Provider>
      </Router>
    )
  }
}
