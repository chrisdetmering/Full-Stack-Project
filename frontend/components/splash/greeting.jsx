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
    const loggedIn = this.props.currentUser
    const user = <Link to='/user'>User</Link>
    const noUser = <div>
      <Link to='/login'>Login</Link>
      <br/>
      <Link to='/signup'>Signup</Link>
    </div>
    var greeting;

    if (loggedIn) { 
      greeting = user; 
    } else { 
      greeting = noUser
    }

    return (
      <div>
        <SignUpContainer />


        {/* <Switch>
          <Route path={"/login"} component={LoginContainer}/>
          <Route path={"/signup"} component={SignUp}/>
          <Route path={"/user"} component={User} />
        </Switch> */}
      </div>
    )
  }

}

export default Greeting;