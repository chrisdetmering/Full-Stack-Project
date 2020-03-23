import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class ToDoList extends React.Component { 
  constructor(props) { 
    super(props)  
    this.props = props;
  }

  componentDidMount() { 
    this.props.fetchTodos()
  }

  render() { 
    var receiveTodo = this.props.receiveTodo;
    var removeTodo = this.props.removeTodo; 
    var todos = this.props.todos; 
    var createTodo = this.props.createTodo;
    var clearErrors = this.props.clearErrors;
    var errors = this.props.errors;
    var updateTodo = this.props.updateTodo;
    var deleteTodo = this.props.deleteTodo;


    return (
      <div>
        <ol>
          {todos.map((todo, idx) => (
            <TodoListItem todo={todo} key={idx}
              removeTodo={removeTodo}
              receiveTodo={receiveTodo}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo} />
          ))}
        </ol>

        <TodoForm 
          receiveTodo={receiveTodo} 
          createTodo={createTodo} 
          clearErrors={clearErrors}
          errors={errors}
        />
      </div>
    )
  }
}

export default ToDoList; 