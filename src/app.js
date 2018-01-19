import React, { Fragment } from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './components/header.js'

export default class App extends React.Component {
  state = {
    clicked: false,
  }
  update = () => {
    this.setState(({ clicked }) => ({ clicked: !clicked }))
  }
  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <Switch>
            <Route path="/app" component={Form} />
            <Route path="/analysis" component={Analysis} />
            <Route path="/" exact component={Login} />
          </Switch>
        </Fragment>
      </Router>
    )
  }
}
