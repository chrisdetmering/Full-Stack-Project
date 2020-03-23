import React from 'react'
import { uniqueId } from '../../util/util'

class TodoForm extends React.Component { 
  constructor(props) { 
    super(props)
    this.state = { title: "", body: "", done: false }
    this.props = props;
    this.updateProperty = this.updateProperty.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.succuess = this.success.bind(this);
  }

  updateProperty(event) { 
    event.preventDefault();
    var name = event.target.name; 
    var value = event.target.value; 
    

    this.setState({ [name]: value })
  }

 
  success() { 
    this.setState({ title: "", body: "" })
    this.props.clearErrors()
  }

  handleSubmit(event) { 
    event.preventDefault();
    var todo = Object.assign({}, { id: uniqueId() }, this.state);
    this.props.createTodo(todo).then(this.success())
      
  }

  render() { 
    const errors = this.props.errors.session
    const errorsList = errors.map((error, idx) =>  
        <li key={idx}>{error}</li>
      )

    return(<div>
      <h1>Add ToDo:</h1>
        <form onSubmit={this.handleSubmit}>
        <ul>{errorsList}</ul>

          <label htmlFor="title">Title</label>
          <br/>
          <input onChange={this.updateProperty}   
            name="title" 
            value={this.state.title} />
          <br/>
          <label htmlFor="body">Body</label>
          <br/>
          <textarea 
            name="body" 
            id="" 
            cols="30" 
            rows="10" 
            onChange={this.updateProperty}
            value={this.state.body}></textarea>
          <br/>

          <input type="submit" value="Submit"/>
        </form>
      </div>)
  }

}

export default TodoForm; 