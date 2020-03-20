import React from 'react'
import GreetingContainer from './splash/greeting_container';
import SignUpContainer from './session/signup_container'
import {  Route } from 'react-router-dom'
export const App = (props) => (
    <div>
        <Route exact path={'/'} component={GreetingContainer} />
        <Route path={'/signup'} component={SignUpContainer} />
    </div>
);


