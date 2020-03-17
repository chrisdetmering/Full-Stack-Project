import React from 'react';

class User extends React.Component { 
  constructor(props) { 
    super(props)
  }

  render() { 
    return(  
      <div>
        <label htmlFor="">
          Username Goes Here
        </label>

        <button value="">Logout</button>
      </div>
    )
  }
}

export default User;