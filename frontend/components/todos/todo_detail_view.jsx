import React from 'react'; 
import StepListContainer from '../steps_list/step_list_container';
import { timingSafeEqual } from 'crypto';


class TodoDetailView extends React.Component { 
  constructor(props) { 
    super(props)
    
  } 
  
  render(){ 
    var body = this.props.todo.body; 
    var id  = this.props.todo.id;
    var tags = this.props.todo.tags;
    
    return (<div>
      <p>{body}</p>
      <p>Steps</p>
      <StepListContainer todo_id={id}/> 
       <p>Tags</p>
        <ul>
      {tags.map((tag, i) => (
        <li key={i * tag.id}>{tag.name}</li>
      ))}
        </ul>

    </div>
    )
  }
}

export default TodoDetailView; 