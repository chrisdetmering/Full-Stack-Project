import React from 'react'
import GreetingContainer from './splash/greeting_container';
import SignUpContainer from './session/signup_container'
import LoginContainer from './session/login_container';
import TodoListContainer from './todos/todo_list_container';
import {  Route, Switch } from 'react-router-dom'
export const App = (props) => (
	<div>

		<Switch> 
			<Route exact path={'/'} component={GreetingContainer} />
			<Route exact path={'/signup'} component={SignUpContainer} />
			<Route path={'/login'} component={LoginContainer} />
			<Route path={'/todos'} component={TodoListContainer} />
			
		</Switch>
	</div>
);


