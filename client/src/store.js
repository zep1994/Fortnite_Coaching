import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import meetings from './reducers/meetings_reducer'
import auth from './reducers/auth';
import { reducer as formReducer } from 'redux-form'

const reducers = combineReducers({ 
  meetings, 
  auth,
  form: formReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
    reducers,
    composeEnhancers(
    applyMiddleware(thunk)
    )
  ) 
