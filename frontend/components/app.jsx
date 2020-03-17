import React from 'react'
import GreetingContainer from './splash/greeting_container';
import LoginContainer from './session/login_container';
import {
    Route, 
    Switch
} from "react-router-dom";

export const App = (props) => (
    <div>
        <GreetingContainer />
    </div>
);


