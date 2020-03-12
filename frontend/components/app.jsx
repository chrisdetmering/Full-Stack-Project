import React from 'react'
import TodoListContainer from './todos/todo_list_container';
import Login from './login_logout/login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


export const App = (props) => (
    
 
  
  
  <Router> 
    <Switch>
      <Route path='/' component= { Login } />

     
    </Switch>
  </Router>
);


