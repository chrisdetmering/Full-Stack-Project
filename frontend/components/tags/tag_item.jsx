import React from 'react'

class TagItem extends React.Component { 
  constructor(props) { 
    super(props)
    this.state = {name: ""}
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
 
  handleSubmit(e) { 
    e.preventDefault(); 

    this.props.addTag(this.state.name)
    this.setState({ name: "" })
  }

  handleInput(e) { 
    e.preventDefault()
    var userinput = e.target.value
    this.setState({ name: userinput })
  }

  render() {
    return (<div>
        <ul>
          {this.props.tags}
        </ul>

        <input type="tag-input" onChange={this.handleInput} value={this.state.name}/>
        <button type="button" onClick={this.handleSubmit}>Add Tag</button>
       </div>)
  }

}

export default TagItem; 