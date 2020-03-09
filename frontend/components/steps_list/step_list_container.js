import { connect } from 'react-redux'; 
import StepList from './step_list';
import { createStep, fetchSteps } from '../../actions/step_actions';
import { stepsByTodoId } from '../../reducers/selectors';


const mapStateToProps = (state, { todo_id }) => ({ steps: stepsByTodoId(state, todo_id) }) 


const mapDispatchToProps = (dispatch) => ({
  createStep: step => dispatch(createStep(step)), 
  fetchSteps: () => dispatch(fetchSteps())
})

const StepListContainer = connect(mapStateToProps, 
  mapDispatchToProps)(StepList); 

  export default StepListContainer; 