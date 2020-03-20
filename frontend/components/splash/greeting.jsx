import React from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import LoginContainer from '../session/login_container';
import SignUpContainer from '../session/signup_container';
import User from '../user/user';

class Greeting extends React.Component { 
  constructor(props) { 
    super(props)

    this.goToSignUp = this.goToSignUp.bind(this);
  }

  goToSignUp(e) { 
    e.preventDefault()
    this.props.history.push('/signup')

  }

  render() { 
    return (
      <div>
        <button onClick={this.goToSignUp}>SignUp</button>
  
      
      </div>
    )
  }

}

export default withRouter(Greeting);