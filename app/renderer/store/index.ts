import {createStore, combineReducers} from 'redux'
import {app} from './reducers'

export default createStore(combineReducers({
  app
}))