import React from 'react';
import DatePicker from "react-datepicker";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class TodoForm extends React.Component { 
  constructor(props) { 
    super(props)
    this.state = { title: "", body: "", due: new Date(), done: false }
    this.updateProperty = this.updateProperty.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.createTodo = this.createTodo.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  
  updateProperty(e) { 
    e.preventDefault(); 
    var name = e.target.name; 
    var value = e.target.value; 

    this.setState({ [name]: value })
    console.log(this.state)
  }

  handleDate(date) {
    this.setState({
      due: date
    });
    console.log(this.state)
  };

  createTodo(e) { 
    e.preventDefault(); 

    this.props.createTodo(this.state).then( 
      todo => console.log(todo), 
      error => console.log(error)
    )

    this.setState({ title: "", body: "", due: new Date(), done: false })
  }

  handleCancel() { 
    
  }


  render() {
    return (<div>
        <form>
          <input 
            className="todo-input"
            type="text" 
            placeholder="Todo" 
            name="title"
            onChange={this.updateProperty}
            value={this.state.title}/>

            <DatePicker 
            selected={this.state.due}
            onChange={this.handleDate}
            showTimeSelect/>

          
          <br/>
          <button onClick={this.createTodo}>Add Todo</button>
          <a onClick={this.handleCancel}>Cancel</a>
        </form>
      </div>)
  }
}

export default TodoForm; 