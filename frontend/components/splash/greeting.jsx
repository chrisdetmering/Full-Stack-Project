import React from 'react';
import { withRouter } from "react-router-dom";

class Greeting extends React.Component { 
  constructor(props) { 
    super(props)

    this.goToSignUp = this.goToSignUp.bind(this);
    this.goToLogin = this.goToLogin.bind(this);
  }

  goToSignUp(e) { 
    e.preventDefault()
    this.props.history.push('/signup')

  }

  goToLogin(e) {
    e.preventDefault()
    this.props.history.push('/login')

  }

  render() { 
    return (
      <div>
        <nav>
          <button onClick={this.goToSignUp}>SignUp</button>
          <button onClick={this.goToLogin}>Login</button>
          

        </nav>
      </div>
    )
  }

}

export default withRouter(Greeting);