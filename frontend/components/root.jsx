import React from 'react';
import { Provider } from 'react-redux';
import { App } from './app'; 
import { 
  HashRouter as Router, 
  Switch, Route
} from 'react-router-dom'

import LoginContainer from './session/login_container';
import SignUpContainer from './session/signup_container';
import User from './user/user';

export const Root = ({ store }) => ( 
  <Provider store={store}> 
     <Router>
       <App />

      <Switch>
        <Route path={"/login"} component={LoginContainer} />
        <Route path={"/signup"} component={SignUpContainer} />
        <Route path={"/user"} component={User} />
      </Switch>

     </Router>
  </Provider> 
)