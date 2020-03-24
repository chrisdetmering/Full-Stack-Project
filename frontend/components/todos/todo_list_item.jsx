import React from 'react';

class TodoListItem extends React.Component { 
  constructor(props) { 
    super(props)
    this.state = { detail: false }
  }

  render() {  
    var todo = this.props.todo 
    return (
      <form className="todo-item">
        <input type="checkbox" />
        <label className="">{todo.title}</label>
      </form>)
  } 
}

export default TodoListItem; 






