import React from 'react'; 

class SignUp extends React.Component { 
  constructor(props) { 
    super(props)
    this.state = { username: "", email: "", password: "" }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateProps = this.updateProps.bind(this);
  }

  updateProps(e) { 
    e.preventDefault();
    var key = e.target.name
    var value = e.target.value

    this.setState({ 
      [key]: value
    })
  }

  handleSubmit(e) { 
    e.preventDefault();
    var user = this.state; 
    console.log(user)
    this.props.createUser(user).then(
      user => console.log(user), 
      error => console.log(error)
     ) 
    ; 
    
    this.setState({ username: "", email: "", password: "" });
  }

  render() { 
    return( 
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">
          Username:
          <input  onChange={this.updateProps}  
          type="text" name="username"/>
        </label>
        <br/>
        <label htmlFor="password">
          Email:
          <input onChange={this.updateProps}
            type="text" name="password" />
        </label>
        <br />
        <label htmlFor="password">
          Password: 
          <input onChange={this.updateProps}
          type="password" name="password"/>
        </label>
        <br/>
        <input type="submit" value="Sign Up!"/>
      </form>
    ) 
  }

}

export default SignUp