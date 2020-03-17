import React from 'react';
import LoginContainer from '../session/login_container';
import SignUp from '../session/signup';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";


class Greeting extends React.Component { 
  constructor(props) { 
    super(props)
  }

  render() { 
    const loggedIn = this.props.currentUser
    const user = <div></div>
    const noUser = <div>
      <Link to='/login'>Login</Link>
      <br/>
      <Link to='/signup'>Signup</Link>
    </div>

    return (
      <div>
        {noUser}
        <Switch>
          <Route path={"/login"} component={LoginContainer}/>
          <Route path={"/signup"} component={SignUp}/>
        </Switch>
      </div>
    )
  }

}

export default Greeting;