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
  FLUSH_RECORD,
  START_FORM_SUBMIT,
  FORM_SUBMIT_SUCCESS,
  FORM_SUBMIT_ERROR,
} from './app-actions.js'

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
    case START_FORM_SUBMIT:
      return {
        formSubmitting: 'STARTING',
      }
    case FORM_SUBMIT_SUCCESS:
      return {
        formSubmitting: 'DONE',
        postedRecords: [
          ...state.postedRecords,
          action.payload,
        ],
      }
    case FORM_SUBMIT_ERROR:
      return {
        formSubmitting: 'DONE',
        errors: payload,
      }
    case FLUSH_RECORD:
      return {
        records: [
          ...state.records,
          {
            notes: state.notes,
            tag: state.tag,
            type: state.type,
            amount: state.amount,
            location: state.location,
            date: new Date(),
          },
        ],
      }
    default:
      return state
  }
}
