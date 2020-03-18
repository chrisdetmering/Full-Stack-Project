import * as APIUtil from '../util/todo_api_util';
import { receiveSessionErrors } from './error_session_actions';
export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export const fetchTodos = () => (dispatch) => { 
  return APIUtil.fetchTodos().then((todos) => { 
    dispatch(receiveTodos(todos));
  })
};

export const createTodo = (todo) => (dispatch) => (
  APIUtil.createTodo(todo).then(
    todo => dispatch(receiveTodo(todo)),
    err => dispatch(receiveErrors(err.responseJSON)) 
  )
)

export const updateTodo = (todo) => (dispatch) => ( 
  APIUtil.updateTodo(todo).then(
    todo => dispatch(receiveTodo(todo)),
    err => dispatch(receiveSessionErrors(err.responseJSON))
  )
)

export const deleteTodo = (todo) => (dispatch) => ( 
  APIUtil.deleteTodo(todo).then( 
    (todo) => dispatch(removeTodo(todo)),
    (err) => dispatch(receiveSessionErrors(err.responseJSON))
  )
)

export const receiveTodos = todos => ({ type: RECEIVE_TODOS, todos }); 
export const receiveTodo = todo => ({ type: RECEIVE_TODO, todo });
export const removeTodo = todo => ({ type: REMOVE_TODO, todo  });


window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;
window.removeTodo = removeTodo; 