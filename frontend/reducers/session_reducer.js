import { RECEIVE_SESSION, DELETE_SESSION } from '../actions/session_actions';


function sessionReducer(state = {}, action) { 
  Object.freeze(state)
  switch(action.type) { 
    case RECEIVE_SESSION: 
      return Object.assign({}, state, action.session)
  }
}