import { combineReducers } from 'redux';
import todosReducer from './todo_reducer';
import stepReducer from './step_reducer';
import errorReducer from './error_reducer';
import sessionReducer from './session_reducer'; 


const rootReducer = combineReducers({ 
  todos: todosReducer,
  steps: stepReducer, 
  errors: errorReducer, 
  session: sessionReducer
}); 

export default rootReducer; 