import React from 'react';
import { Provider } from 'react-redux';
import { App } from './app'; 
import { HashRouter as Router, Route } from 'react-router-dom';
import TodoListContainer from './todos/todo_list_container';

export const Root = ({ store }) => ( 
  <Provider store={store}> 
     <Router>
        <App />
     </Router>
  </Provider> 
)