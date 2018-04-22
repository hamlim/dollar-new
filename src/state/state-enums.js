export const FORM = {
  default: 'DEFAULT',
  starting: 'STARTING',
  done: 'DONE',
  error: 'ERROR',
}

export const LOGIN = {
  starting: 'STARTING',
  done: 'DONE',
  failed: 'FAILED',
}

export const TRANSACTIONS = {
  default: 'default',
  starting: 'STARTING',
  done(transactions) {
    return transactions
  },
  fail: 'FAIL',
}
