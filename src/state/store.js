import createStore from 'react-state-reducer'
import { reducer } from './app-reducer'

const { Provider, Consumer } = createStore(reducer)

export { Provider, Consumer }
