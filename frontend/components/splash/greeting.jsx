import React from 'react';

class Greeting extends React.Component { 
  constructor(props) { 
    super(props)
  }

  render() { 
    const loggedIn = this.props.currentUser

    return (
      <div>Greeting</div>
    )
  }

}

export default Greeting;