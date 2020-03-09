import React from 'react'
import { uniqueId } from '../../util/util'
import TagItem from '../tags/tag_item';

class TodoForm extends React.Component { 
  constructor(props) { 
    super(props)
    this.state = { title: "", body: "", done: false, tag_names: [] }
    this.props = props;
    this.updateProperty = this.updateProperty.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.succuess = this.success.bind(this);
    this.addTag = this.addTag.bind(this);
  }

  updateProperty(event) { 
    event.preventDefault();
    var name = event.target.name; 
    var value = event.target.value; 
    

    this.setState({ [name]: value })
  }

  addTag(tag) { 
    this.setState({ tag_names: [...this.state.tag_names, tag] })
  }

 
  success() { 
    this.setState({ title: "", body: "", tag_names: [] })
    this.props.clearErrors()
  }

  handleSubmit(event) { 
    event.preventDefault();
    var todo = Object.assign({}, { id: uniqueId() }, this.state);
    this.props.createTodo(todo).then(this.success())
      
  }

  render() { 
    const errors = this.props.errors
    const errorsList = errors.map((error, idx) =>  
        <li key={idx}>{error}</li>
      )
    const tags = this.state.tag_names.map( (tag, i) => (
      <li key={i}>{tag}</li>
    ))

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

          <TagItem tags={tags} addTag={this.addTag}/>

          <input type="submit" value="Submit"/>
        </form>
      </div>)
  }

}

export default TodoForm; 