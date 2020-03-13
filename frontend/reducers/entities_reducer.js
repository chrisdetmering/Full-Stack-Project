import { combineReducers } from 'redux';
import  stepReducer  from'./step_reducer'; 
import  todoReducer  from './todo_reducer';
import userReducer from './user_reducer';

const entitiesReducer = combineReducers({ 
  steps: stepReducer, 
  todos: todoReducer, 
  users: userReducer
})

export default entitiesReducer;
