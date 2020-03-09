import React from 'react'; 
import ReactDOM from 'react-dom'; 
import configureStore from './store/store'; 
import { Root } from './components/root';
import { allTodos } from './reducers/selectors';
import { fetchTodos } from './actions/todo_actions';
import { createTodo } from './actions/todo_actions';

const store = configureStore();

window.createTodo = createTodo;
window.fetchTodos = fetchTodos;
window.store = store;

window.addEventListener('DOMContentLoaded', () => { 
 var root = document.getElementById('content');

  ReactDOM.render(<Root store={store}/>, root);

});

