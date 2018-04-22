import {
  selectAmount,
  selectLocation,
  selectNote,
  selectDate,
  selectTag,
  selectType,
} from './app-selectors'
import actionCreators from './app-actions.js'

import TOKEN from '../../SECRETS.js'

const headers = {
  Authorization: TOKEN,
  'Content-type': 'application/json',
}

export const handleFormSubmit = (
  dispatch,
  state,
) => event => {
  event.preventDefault()
  dispatch(actionCreators.startFormSubmit())
  // Do some validation
  let hasAnyErrors = false
  if (selectAmount(state) === 0) {
    dispatch(actionCreators.invalidAmount())
    hasAnyErrors = true
  }
  if (selectLocation(state).length <= 0) {
    dispatch(actionCreators.invalidLocation())
    hasAnyErrors = true
  }
  if (!selectTag(state) || selectTag(state).value === '') {
    dispatch(actionCreators.invalidTag())
    hasAnyErrors = true
  }
  if (
    !selectType(state) ||
    selectType(state).value === ''
  ) {
    dispatch(actionCreators.invalidType())
    hasAnyErrors = true
  }

  if (hasAnyErrors) {
    return
  } else {
    fetch(
      'https://api.airtable.com/v0/appuFTGsGkQe83DZn/Transactions',
      {
        method: 'post',
        headers,
        body: JSON.stringify({
          fields: {
            amount: state.amount,
            notes: state.notes,
            tag: state.tag.value,
            type: state.type.value,
            location: state.location,
            date: Date.now().toString(),
          },
        }),
      },
    )
      .then(r => r.json())
      .then(response => {
        if (response.id) {
          dispatch(actionCreators.successfulPost(response))
          setTimeout(() => {
            dispatch(actionCreators.clearForm())
          }, 2000)
        } else {
          dispatch(actionCreators.errorPost(response))
        }
      })
      .catch(error => {
        console.error(error)
        dispatch(actionCreators.errorPost(error))
      })
  }
}

export const fetchAllTransactions = dispatch => {
  dispatch(actionCreators.fetchAllTransactionsStart())
  fetch(
    'https://api.airtable.com/v0/appuFTGsGkQe83DZn/Transactions?maxRecords=3&view=Main%20View',
    {
      method: 'GET',
      headers,
    },
  )
    .then(r => r.json())
    .then(response => {
      if (response.records) {
        dispatch(
          actionCreators.fetchAllTransactionsSuccess(
            response,
          ),
        )
      } else {
        dispatch(
          actionCreators.fetchAllTransactionsFail(response),
        )
      }
    })
    .catch(error => {
      console.error(error)
      dispatch(
        actionCreators.fetchAllTransactionsFail(error),
      )
    })
}
