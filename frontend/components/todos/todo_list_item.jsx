import React from 'react';
import TodoDetailViewContainer from './todo_detail_container';

class TodoListItem extends React.Component { 
  constructor(props) { 
    super(props)
    this.state = { detail: false }
  }

  render() {   

    return (<div>
      Todo
    </div>
    )
  } 
}

export default TodoListItem; 






