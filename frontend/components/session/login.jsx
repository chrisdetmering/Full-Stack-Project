import React from 'react'

class Login extends React.Component { 
  constructor(props) { 
    super(props) 

    this.state = { username: "", password: ""}

    this.handleSubmit = this.handleSubmit.bind(this); 
    this.updateProps = this.updateProps.bind(this); 
  }

  updateProps(e) { 
    e.preventDefault();
    var key = e.target.name; 
    var value = e.target.value; 
    this.setState({ [key]: value })
   
  }

  handleSubmit(e) { 
    e.preventDefault();
    var user = this.state
    this.props.loginUser(user).then(
      user => { console.log(user) }
    ); 

    this.setState({ username: "", password: "" })
  }

  render() { 
    return (<div>
      <h1>Login</h1>
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="username" onChange={this.updateProps} value={this.state.username}/>
        <input type="password" name="password" onChange={this.updateProps} value={this.state.password}/>
        <input type="submit" value="Login"/>
      </form>

      </div>
    )
  }
}

export default Login; 