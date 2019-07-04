import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/index.scss'

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

const StoredProvider = (props) => (
  <Provider store={store}>
    {props.children}
  </Provider>
)

export default StoredProvider