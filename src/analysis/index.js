import React, { Component } from 'react'
import { actionCreator } from '../state/app-actions'
import Container from '../components/container.js'
import { Consumer } from '../state/store'
import Button from '@atlaskit/button'
import { fetchAllTransactions } from '../state/app-thunks'
import { TRANSACTIONS } from '../state/state-enums'

import { selectTransactionState } from '../state/app-selectors'

export default class Analysis extends Component {
  render() {
    return (
      <Consumer>
        {({ dispatch, ...state }) => {
          const transactionState = selectTransactionState(
            state,
          )
          console.log(transactionState)
          return (
            <Container>
              <h2>Analysis</h2>

              {transactionState === TRANSACTIONS.default ? (
                <Button
                  appearance="primary"
                  onClick={() => {
                    fetchAllTransactions(dispatch)
                  }}
                >
                  Load All Transactions
                </Button>
              ) : transactionState === 'DONE' ? (
                <ul>
                  {state.allTransactions.map(
                    transaction => (
                      <li key={transaction.id}>
                        <dl>
                          <div>
                            <dt>Amount: </dt>
                            <dd>
                              {transaction.fields.amount}
                            </dd>
                          </div>
                          <div>
                            <dt>Notes: </dt>
                            <dd>
                              {transaction.fields.notes}
                            </dd>
                          </div>
                          <div>
                            <dt>Tag: </dt>
                            <dd>
                              {transaction.fields.tag}
                            </dd>
                          </div>
                          <div>
                            <dt>Type: </dt>
                            <dd>
                              {transaction.fields.type}
                            </dd>
                          </div>
                          <div>
                            <dt>Location: </dt>
                            <dd>
                              {transaction.fields.location}
                            </dd>
                          </div>
                        </dl>
                      </li>
                    ),
                  )}
                </ul>
              ) : (
                <p>
                  Oops an error occurred, try refreshing the
                  page
                </p>
              )}
            </Container>
          )
        }}
      </Consumer>
    )
  }
}
