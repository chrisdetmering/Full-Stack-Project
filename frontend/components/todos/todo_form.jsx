import React from 'react'
import { uniqueId } from '../../util/util'

class TodoForm extends React.Component { 
  constructor(props) { 
    super(props)
    this.state = { title: "", body: "", done: false }
  }

  render() {
    return (<div>
        <p>TodoForm</p>
        <form>
          
        </form>
      </div>)
  }

}

export default TodoForm; 