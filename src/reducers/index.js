import { combineReducers } from 'redux'
import Reducer from './reducer'

const rootReducer = combineReducers({
  master: Reducer
});

export default rootReducer
