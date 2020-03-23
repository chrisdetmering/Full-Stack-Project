import React from 'react';
import TodoDetailViewContainer from './todo_detail_container';

class TodoListItem extends React.Component { 
  constructor(props) { 
    super(props)
    this.state = { detail: false }
  }

  render() {  
    var todo = this.props.todo 
    return (
    <li key={todo.id}>
      {todo.title}
    </li>)
  } 
}

export default TodoListItem; 






