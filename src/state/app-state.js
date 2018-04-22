import { TRANSACTIONS } from './state-enums'
export const getInitialState = globalState => ({
  amount: 0,
  location: '',
  tag: '',
  tags: [...globalState.tags],
  types: [...globalState.types],
  type: '',
  date: globalState.today,
  notes: '',
  allTransactions: TRANSACTIONS.default,
})
