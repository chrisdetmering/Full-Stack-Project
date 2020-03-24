import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class ToDoList extends React.Component { 
  constructor(props) { 
    super(props)  
    this.props = props;

    this.state = { showForm: false }
    this.toggleForm = this.toggleForm.bind(this);
  }

  componentDidMount() { 
    this.props.fetchTodos()
  }

  toggleForm(e) { 
    e.preventDefault(); 
    
    this.setState({ showForm: true })
  }

  render() { 
    var createTodo = this.props.createTodo;
    var buttonOrForm = this.state.showForm ?
     <TodoForm 
      createTodo={createTodo} 
        toggleForm={this.toggleForm.bind(this)} /> : 
      <button 
      className="add-todo-btn"
      onClick={this.toggleForm}>+</button>

    return (<div>
        <ol>
          {this.props.todos.map(todo =>( 
            <li key={todo.id}>
              <TodoListItem todo={todo} /> 
            </li>))}
        </ol>

        {buttonOrForm}

      </div>)
  }
}

export default ToDoList; 