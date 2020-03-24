import React from 'react';
import DatePicker from "react-datepicker";
import { uniqueId } from '../../util/util';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


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

          <input 
            type="datetime-local" 
            name="due" className="date-input"/>

          
          <br/>
          <button>Add Todo</button>
        </form>
      </div>)
  }
}

export default TodoForm; 