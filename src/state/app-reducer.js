import {
  UPDATE_AMOUNT,
  UPDATE_DATE,
  UPDATE_NOTES,
  UPDATE_LOCATION,
  UPDATE_TAG,
  UPDATE_TYPE,
  FORM_SUBMIT,
  INVALID_AMOUNT,
  INVALID_LOCATION,
  INVALID_TAG,
  INVALID_TYPE,
  LOGIN,
  START_FORM_SUBMIT,
  FORM_SUBMIT_SUCCESS,
  FORM_SUBMIT_ERROR,
  CLEAR_FORM,
  FETCH_TRANSACTIONS_START,
  FETCH_TRANSACTIONS_FAIL,
  FETCH_TRANSACTIONS_SUCCESS,
} from './app-actions.js'

import {
  FORM,
  LOGIN as LOGIN_STATE,
  TRANSACTIONS,
} from './state-enums'

const INIT_STATE = {
  notes: '',
  tag: '',
  type: '',
  amount: 0,
  location: '',
  date: new Date(),
  login: '',
  records: [],
  postedRecords: [],
  allTransactions: TRANSACTIONS.default,
}

export const reducer = action => (state = INIT_STATE) => {
  switch (action.type) {
    // login
    case LOGIN:
      return {
        login: LOGIN_STATE.done,
      }
    // Form
    case UPDATE_AMOUNT:
      return {
        amount: action.payload,
        amountError: false,
      }
    case INVALID_AMOUNT:
      return {
        formSubmitting: FORM.error,
        amountError: true,
      }
    case UPDATE_LOCATION:
      return {
        location: action.payload,
        locationError: false,
      }
    case INVALID_LOCATION:
      return {
        formSubmitting: FORM.error,
        locationError: true,
      }
    case UPDATE_TAG:
      return {
        tag: action.payload,
        tagError: false,
      }
    case INVALID_TAG:
      return {
        formSubmitting: FORM.error,
        tagError: true,
      }
    case UPDATE_TYPE:
      return {
        type: action.payload,
        typeError: false,
      }
    case INVALID_TYPE:
      return {
        formSubmitting: FORM.error,
        typeError: true,
      }
    case UPDATE_NOTES:
      return {
        notes: action.payload,
      }
    case UPDATE_DATE:
      return {
        date: action.payload,
      }
    case FORM_SUBMIT:
      return {
        notes: '',
        tag: '',
        type: '',
        amount: 0,
        location: '',
      }
    case START_FORM_SUBMIT:
      return {
        formSubmitting: FORM.starting,
      }
    case FORM_SUBMIT_SUCCESS:
      return {
        formSubmitting: FORM.done,
        postedRecords: [
          ...state.postedRecords,
          action.payload,
        ],
      }
    case FORM_SUBMIT_ERROR:
      return {
        formSubmitting: FORM.done,
        errors: payload,
      }
    case CLEAR_FORM:
      return {
        formSubmitting: FORM.default,
        notes: '',
        tag: '',
        type: '',
        amount: 0,
        location: '',
      }
    // Fetch all transactions
    case FETCH_TRANSACTIONS_START:
      return {
        allTransactions: TRANSACTIONS.starting,
      }
    case FETCH_TRANSACTIONS_FAIL:
      return {
        allTransactions: TRANSACTIONS.fail,
      }
    case FETCH_TRANSACTIONS_SUCCESS:
      return {
        allTransactions: TRANSACTIONS.done(action.payload),
      }
    default:
      return state
  }
}
