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
    dispatch(actionCreators.flushRecord())
  }
}
