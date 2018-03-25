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
  LOGIN_STARTING,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  START_FORM_SUBMIT,
  FORM_SUBMIT_SUCCESS,
  FORM_SUBMIT_ERROR,
} from './app-actions.js'

import { FORM, LOGIN } from './state-enums'

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
}

export const reducer = action => (state = INIT_STATE) => {
  switch (action.type) {
    // login
    case LOGIN_STARTING:
      return {
        login: LOGIN.starting,
      }
    case LOGIN_SUCCESS:
      return {
        login: LOGIN.done,
        user: action.payload,
      }
    case LOGIN_FAILURE:
      return {
        login: LOGIN.failed,
        authError: action.payload,
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
    default:
      return state
  }
}
