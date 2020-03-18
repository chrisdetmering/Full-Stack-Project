import React from 'react'; 
import Errors from '../errors/errors';
import ErrorsContainer from '../errors/errors_container';

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
    this.props.createUser(user).then(
      () => this.props.history.push('/todos')
     ); 
    
    this.setState({ username: "", email: "", password: "" });
  }

  render() { 
    
    return( 
      <div>
          <ErrorsContainer />
        <form>
          <label htmlFor="username">
            Username:
            <input  onChange={this.updateProps}  
            type="text" name="username"/>
          </label>
          <br/>
          <label htmlFor="password">
            Email:
            <input onChange={this.updateProps}
              type="text" name="email" />
          </label>
          <br />
          <label htmlFor="password">
            Password: 
            <input onChange={this.updateProps}
            type="password" name="password"/>
          </label>
          <br/>
          <button onClick={this.handleSubmit}>Sign-up!</button>
        </form>
      </div>
    ) 
  }

}

export default SignUp