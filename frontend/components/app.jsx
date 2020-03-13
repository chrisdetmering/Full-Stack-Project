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
      <Route path='/signup' component= { SignUp } />
      <Route path='/login' component= { LoginContainer } />
      <Route path='/todos' component={ TodoListContainer } />
    </Switch>

);


