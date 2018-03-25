import {
  selectAmount,
  selectLocation,
  selectNote,
  selectDate,
  selectTag,
  selectType,
} from './app-selectors'
import actionCreators from './app-actions.js'

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
  if (selectTag(state).length <= 0) {
    dispatch(actionCreators.invalidTag())
    hasAnyErrors = true
  }
  if (selectType(state).length <= 0) {
    dispatch(actionCreators.invalidType())
    hasAnyErrors = true
  }

  if (hasAnyErrors) {
    return
  } else {
    // Sync state to localStorage and also to backend
    fetch(
      'https://api.graph.cool/simple/v1/cjf62z1x73dy90177u2vx3x3w',
      {
        method: 'post',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          query: `
            mutation {
              createTransaction(
                amount: "${state.amount}",
                notes: "${state.notes}",
                tag: "${state.tag.value}",
                type: "${state.type.value}",
                location: "${state.location}",
                date: "${Date.now().toString()}"
              ) {
                id,
                amount,
                notes,
                tag,
                type,
                location,
                date
              }
            }
          `,
        }),
      },
    )
      .then(r => r.json())
      .then(response => {
        if (response.data) {
          dispatch(
            actionCreators.successfulPost(
              response.data.createTransaction,
            ),
          )
        } else if (response.errors) {
          dispatch(
            actionCreators.errorPost(response.errors),
          )
        }
      })
      .catch(console.error)
  }
}
