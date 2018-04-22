import React, { Component } from 'react'
import { actionCreator } from '../state/app-actions'
import Container from '../components/container.js'
import { Consumer } from '../state/store'
import Button from '@atlaskit/button'
import { fetchAllTransactions } from '../state/app-thunks'

export default class Analysis extends Component {
  render() {
    return (
      <Consumer>
        {({ dispatch, ...state }) => (
          <Container>
            <h2>Analysis</h2>

            <Button
              appearance="primary"
              onClick={() => {
                fetchAllTransactions(dispatch)
              }}
            >
              Load All Transactions
            </Button>
          </Container>
        )}
      </Consumer>
    )
  }
}
