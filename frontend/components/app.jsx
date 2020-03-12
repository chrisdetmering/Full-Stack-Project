import React from 'react'
import TodoListContainer from './todos/todo_list_container';
import LoginContainer from './login_logout/login_contrainer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


export const App = (props) => (
    
 
  
  
  <Router> 
    <Switch>
      <Route path='/' component= { LoginContainer } />

     
    </Switch>
  </Router>
);


