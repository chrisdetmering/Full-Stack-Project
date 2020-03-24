import React from 'react';
import ToDoListContainer from '../todos/todo_list_container';


class ProjectsList extends React.Component { 
  constructor(props) { 
    super(props)
  }


  render() { 
    return( 
      <div >
        <nav> </nav>
        <section className="project-container">
          <section className="project-list">
              Project List
          </section>
          <section className="todo-list">
            <ToDoListContainer /> 
          </section>
          
        </section>

      </div>
    )
  }


}


export default ProjectsList;