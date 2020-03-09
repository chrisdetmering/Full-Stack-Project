import React from 'react';
import TodoDetailViewContainer from './todo_detail_container';

class TodoListItem extends React.Component { 
  constructor(props) { 
    super(props)
    this.state = { detail: false }
    this.showDetail = this.showDetail.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  deleteTodo(e) { 
    e.preventDefault();
    this.props.deleteTodo(this.props.todo)

  }

  showDetail(e) { 
    e.preventDefault();
    this.setState({ detail: !this.state.detail })
  }


  toggleTodo(event) {
    event.preventDefault()
    var todo = Object.assign({}, 
      this.props.todo, 
      { done: !this.props.todo.done })

    this.props.updateTodo(todo);
  }

  render() {   
      var { todo } = this.props
      var { title, done } = todo 

    return (<div>
      <li key={this.props.idx} onClick={this.showDetail}>{title}</li>
      {this.state.detail && <TodoDetailViewContainer todo={todo}/>}  
      <button onClick={this.toggleTodo}>{done ? "Undo" : "Done"}</button>
      <button onClick={this.deleteTodo}>Delete</button>
    </div>
    )
  } 
}

export default TodoListItem; 






