import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import LoginContainer from '../session/login_container';
import SignUpContainer from '../session/signup_container';
import User from '../user/user';

class Greeting extends React.Component { 
  constructor(props) { 
    super(props)
  }

  render() { 
    return (
      <div>
      
        <nav>
          <Link to={'/login'}>Login</Link>
          <br/>
          <Link to={'/signup'}>Sign-up</Link>
        </nav>

      </div>
    )
  }

}

export default Greeting;