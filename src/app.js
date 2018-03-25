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
import ErrorBoundary from '@matthamlin/react-error-boundary'

import { LOGIN } from './state/state-enums'

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <ErrorBoundary onCaughtError={console.error}>
          {error =>
            error ? (
              <div>An error has occured</div>
            ) : (
              <Provider>
                <Fragment>
                  <Header />
                  <Switch>
                    <Route
                      path="/app"
                      render={({ match }) =>
                        match && <Form />
                      }
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
                                login === LOGIN.done && (
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
            )
          }
        </ErrorBoundary>
      </Router>
    )
  }
}
