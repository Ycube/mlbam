import { combineReducers } from 'redux'
import Reducer from './reducer'

const rootReducer = combineReducers({
  masterData: Reducer
});

export default rootReducer
