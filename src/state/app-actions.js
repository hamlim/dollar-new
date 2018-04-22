import { selectValueFromEvent } from './app-selectors'

export const UPDATE_AMOUNT = 'UPDATE_AMOUNT'
export const UPDATE_LOCATION = 'UPDATE_LOCATION'
export const UPDATE_TAG = 'UPDATE_TAG'
export const UPDATE_TYPE = 'UPDATE_TYPE'
export const UPDATE_NOTES = 'UPDATE_NOTES'
export const FORM_SUBMIT = 'FORM_SUBMIT'
export const UPDATE_DATE = 'UPDATE_DATE'
export const INVALID_AMOUNT = 'INVALID_AMOUNT'
export const INVALID_LOCATION = 'INVALID_LOCATION'
export const INVALID_TAG = 'INVALID_TAG'
export const INVALID_TYPE = 'INVALID_TYPE'
export const START_FORM_SUBMIT = 'START_FORM_SUBMIT'
export const FORM_SUBMIT_SUCCESS = 'FORM_SUBMIT_SUCCESS'
export const FORM_SUBMIT_ERROR = 'FORM_SUBMIT_ERROR'
export const CLEAR_FORM = 'CLEAR_FORM'

export const LOGIN = 'LOGIN'

export const FETCH_TRANSACTIONS_START =
  'FETCH_TRANSACTIONS_START'
export const FETCH_TRANSACTIONS_SUCCESS =
  'FETCH_TRANSACTIONS_SUCCESS'
export const FETCH_TRANSACTIONS_FAIL =
  'FETCH_TRANSACTIONS_FAIL'

export const actionCreators = {
  login() {
    return {
      type: LOGIN,
    }
  },
  amountChange(event) {
    const value = selectValueFromEvent(event)
    return {
      type: UPDATE_AMOUNT,
      payload: value,
    }
  },
  locationChange(event) {
    const value = selectValueFromEvent(event)
    return {
      type: UPDATE_LOCATION,
      payload: value,
    }
  },
  tagChange(value) {
    return {
      type: UPDATE_TAG,
      payload: value,
    }
  },
  typeChange(value) {
    return {
      type: UPDATE_TYPE,
      payload: value,
    }
  },
  notesChange(event) {
    const value = selectValueFromEvent(event)
    return {
      type: UPDATE_NOTES,
      payload: value,
    }
  },
  dateChange(event) {
    const value = selectValueFromEvent(event)
    return {
      type: UPDATE_DATE,
      payload: value,
    }
  },
  invalidAmount() {
    return {
      type: INVALID_AMOUNT,
    }
  },
  invalidLocation() {
    return {
      type: INVALID_LOCATION,
    }
  },
  invalidTag() {
    return {
      type: INVALID_TAG,
    }
  },
  invalidType() {
    return {
      type: INVALID_TYPE,
    }
  },
  startFormSubmit() {
    return {
      type: START_FORM_SUBMIT,
    }
  },
  successfulPost(data) {
    return {
      type: FORM_SUBMIT_SUCCESS,
      payload: data,
    }
  },
  errorPost(errors) {
    return {
      type: FORM_SUBMIT_ERROR,
      payload: errors,
    }
  },
  clearForm() {
    return {
      type: CLEAR_FORM,
    }
  },
  // Fetch all transactions
  fetchAllTransactionsStart() {
    return {
      type: FETCH_TRANSACTIONS_START,
    }
  },
  fetchAllTransactionsSuccess(payload) {
    return {
      type: FETCH_TRANSACTIONS_SUCCESS,
      payload,
    }
  },
  fetchAllTransactionsFail(payload) {
    return {
      type: FETCH_TRANSACTIONS_FAIL,
      payload,
    }
  },
}

export default actionCreators
