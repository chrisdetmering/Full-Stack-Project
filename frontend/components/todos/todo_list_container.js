import  ToDoList   from './todo_list';
import { connect } from 'react-redux';
import { allTodos } from '../../reducers/selectors';
import { removeTodo } from '../../actions/todo_actions';
import { fetchTodos, createTodo, updateTodo, deleteTodo } from '../../actions/todo_actions';
import { clearErrors } from '../../actions/error_session_actions';

const mapStateToProps = (state) => {
 return { todos: allTodos(state), 
    errors: state.errors
  }
};

const mapDispachToProps = (dispatch) => ({ 
  removeTodo: todo => dispatch(removeTodo(todo)), 
  fetchTodos: () => dispatch(fetchTodos()),
  createTodo: todo => dispatch(createTodo(todo)), 
  clearErrors: () => dispatch(clearErrors()), 
  updateTodo: todo => dispatch(updateTodo(todo)), 
  deleteTodo: todo => dispatch(deleteTodo(todo))
});

const TodoListContainer = connect(
  mapStateToProps, 
  mapDispachToProps
)(ToDoList);


export default TodoListContainer;