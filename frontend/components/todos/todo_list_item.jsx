import React from 'react';

class TodoListItem extends React.Component { 
  constructor(props) { 
    super(props)
    this.state = { detail: false }
  }

  render() {  
    var todo = this.props.todo 
    return (
      <form>
        <label className="">{todo.title}</label> 
        <label className="">due date</label>
        <input type="checkbox"/>
      </form>)
  } 
}

export default TodoListItem; 






