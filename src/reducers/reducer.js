import { FETCH_MASTER } from '../actions'

const initialState = null

export default function(state = initialState, action){
  switch (action.type) { 
    case FETCH_MASTER: 
      return {...state, ...action.payload.data}
  }
    
  return state
}