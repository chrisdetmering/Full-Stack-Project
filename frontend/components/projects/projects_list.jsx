import React from 'react';
import ToDoListContainer from '../todos/todo_list_container';


class ProjectsList extends React.Component { 
  constructor(props) { 
    super(props)
  }


  render() { 
    return( 
      <div>
        <nav>Navbar Here </nav>
        <ToDoListContainer /> 

      </div>
    )
  }


}


export default ProjectsList;