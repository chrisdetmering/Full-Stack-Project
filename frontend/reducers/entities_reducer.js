import { combineReducers } from 'redux';
import  todoReducer  from './todo_reducer';
import userReducer from './user_reducer';

const entitiesReducer = combineReducers({ 
  todos: todoReducer, 
  user: userReducer
})

export default entitiesReducer;
