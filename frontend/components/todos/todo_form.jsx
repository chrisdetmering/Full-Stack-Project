import React from 'react';
import DatePicker from "react-datepicker";
import { uniqueId } from '../../util/util';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "react-datepicker/dist/react-datepicker.css";

class TodoForm extends React.Component { 
  constructor(props) { 
    super(props)
    this.state = { title: "", body: "", due: "", done: false }
    this.updateProperty = this.updateProperty.bind(this);
  }

  
  updateProperty(e) { 
    e.preventDefault(); 
    var name = e.target.name; 
    var value = e.target.value; 

    this.setState({ [name]: value })
    console.log(this.state)
  }

  render() {
    return (<div>
        <form>
          <label htmlFor="">ADD TODO</label>
          <br/>
      
          <input 
            className="todo-input"
            type="text" 
            placeholder="Todo" 
            name="title"
            onChange={this.updateProperty}/>

          <DatePicker />

          <button>Add Todo</button>
        </form>
      </div>)
  }
}

export default TodoForm; 