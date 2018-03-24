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
} from './app-actions.js'

const INIT_STATE = {
  notes: '',
  tag: '',
  type: '',
  amount: 0,
  location: '',
  date: new Date(),
  login: '',
}

export const reducer = action => (state = INIT_STATE) => {
  switch (action.type) {
    // login
    case LOGIN_STARTING:
      return {
        login: 'starting',
      }
    case LOGIN_SUCCESS:
      return {
        login: 'done',
        user: action.payload,
      }
    case LOGIN_FAILURE:
      return {
        login: 'failed',
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
        amountError: true,
      }
    case UPDATE_LOCATION:
      return {
        location: action.payload,
        locationError: false,
      }
    case INVALID_LOCATION:
      return {
        locationError: true,
      }
    case UPDATE_TAG:
      return {
        tag: action.payload,
        tagError: false,
      }
    case INVALID_TAG:
      return {
        tagError: true,
      }
    case UPDATE_TYPE:
      return {
        type: action.payload,
        typeError: false,
      }
    case INVALID_TYPE:
      return {
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
    default:
      return state
  }
}
