import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/error_actions'

const errorReducer = (prevState = [], action) => { 
    Object.freeze(prevState);
    switch (action.type) { 
      case RECEIVE_ERRORS: 
      console.log(action.errors)
        return action.errors;
      case CLEAR_ERRORS: 
        return []; 
      default: 
        return prevState; 
    }
}

export default errorReducer; 