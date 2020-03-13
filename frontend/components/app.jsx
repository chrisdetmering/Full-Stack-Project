import React from 'react'
import TodoListContainer from './todos/todo_list_container';
import LoginContainer from './session/login_container';
import SignUp from './session/signup'
import {
  Switch,
  Route
} from "react-router-dom";


export const App = (props) => (
    
    <Switch>
      <Route path='/users/new' component= { SignUp } />
      <Route path='/session/new' component= { LoginContainer } />
    </Switch>

);


