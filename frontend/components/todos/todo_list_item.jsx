import React from 'react';

class TodoListItem extends React.Component { 
  constructor(props) { 
    super(props)
    this.state = { detail: false }
  }

  render() {  
    var todo = this.props.todo 
    return (
    <li key={todo.id}>
      
    </li>)
  } 
}

export default TodoListItem; 






