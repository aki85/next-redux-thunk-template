import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'

export default (initialState) => {
  return createStore(reducer, initialState, applyMiddleware(thunk))
}