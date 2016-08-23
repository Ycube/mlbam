import { FETCH_MASTER } from '../actions'

const initialState = {
}

export default function(state = initialState, action){
  switch (action.type) { 
    case FETCH_MASTER: 
      return Object.assign({}, {...state, ...action.payload.data})
  }
    
  return state
}