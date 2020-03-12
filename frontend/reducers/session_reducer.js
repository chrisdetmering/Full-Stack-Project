import { RECEIVE_CURRENT_USER, DELETE_SESSION } from '../actions/session_actions';


function sessionReducer(state = {}, action) { 
  Object.freeze(state)
  switch(action.type) { 
    case RECEIVE_CURRENT_USER: 
      return Object.assign({}, state, action.user)
    default: 
      return state
  }
}


export default sessionReducer;