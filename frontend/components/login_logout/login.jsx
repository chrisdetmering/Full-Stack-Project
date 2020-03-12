import React from 'react'


class Login extends React.Component { 
  constructor(props) { 
    super(props) 

    this.state = { username: "", password: ""}

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() { 

  }


  render() { 
    return (<div>
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="login_username"/>
        <input type="password" name="login_password"/>
        <input type="submit" value="Login"/>
      </form>

      </div>
    )
  }
}


export default Login; 