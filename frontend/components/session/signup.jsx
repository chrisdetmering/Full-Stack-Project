import React from 'react'; 

class SignUp extends React.Component { 
  constructor(props) { 
    super(props)
  }

  render() { 
    return( 
      <form>
        <label htmlFor="username">
          Username
          <input type="text" name="username" />
        </label>
        <label htmlFor="">  
          Password
          <input type="password" name="password" />
        </label>

        <input type="submit" value="Sign-up"/>
      </form>)
  }

}

export default SignUp