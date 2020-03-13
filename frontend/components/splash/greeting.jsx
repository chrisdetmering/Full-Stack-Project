import React from 'react';
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
    var splash; 
    const loggedIn = this.props.currentUser
    
    splash = !loggedIn ? 'not logged in' : "loggedin"
    
    return (

      

      <div>{splash}</div>
    )
  }

}

export default Greeting;