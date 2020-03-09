import { connect } from 'react-redux'; 
import StepListItem from './step_list_item'; 
import { receiveStep, deleteStep } from '../../actions/step_actions';

const mapDispatchToProps = (dispatch) => ({ 
  receiveStep: step => dispatch(receiveStep(step)), 
  deleteStep: step => dispatch(deleteStep(step))
})

const StepListItemContainer = connect(null, mapDispatchToProps)(StepListItem); 

export default StepListItemContainer; 