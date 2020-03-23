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
 

    return (
      <div>
          Todos
          <TodoListItem />
        

          <TodoForm />
      </div>
    )
  }
}

export default ToDoList; 