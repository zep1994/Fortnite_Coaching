import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import meetings from './reducers/meetings_reducer'
import auth from './reducers/auth';


const reducers = combineReducers({ meetings, auth })
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
    reducers,
    composeEnhancers(
    applyMiddleware(thunk)
    )
  ) 
