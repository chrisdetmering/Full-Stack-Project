import { combineReducers } from 'redux';
import  step_reducer  from'./step_reducer'; 
import  todo_reducer  from './todo_reducer';


const entitiesReducer = combineReducers({ 
  steps: step_reducer, 
  todos: todo_reducer
})

export default entitiesReducer;
