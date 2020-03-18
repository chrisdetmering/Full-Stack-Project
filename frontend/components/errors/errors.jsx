import React from 'react' 


class Errors extends React.Component { 
  constructor(props) { 
    super(props)
    this.listErrors = this.listErrors.bind(this);
  }

  listErrors() {
    return this.props.errors.map((error, key) => (
      <li key={key}>{error}</li>
    ))
  }


  render() { 
    return( 
      <div>
        <ul>
          {this.listErrors()}
        </ul>
      </div>
    )
  }
}


export default Errors;