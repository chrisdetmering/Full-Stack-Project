import * as StepAPIUtil from '../util/step_api_util';
export const RECEIVE_STEPS = "RECEIVE_STEPS";
export const RECEIVE_STEP = "RECEIVE_STEP";
export const REMOVE_STEP = "REMOVE_STEP";

export const fetchSteps = () => (dispatch) => ( 
  StepAPIUtil.fetchSteps().then(
    steps => dispatch(receiveSteps(steps))
  )
)

export const createStep = (step) => (dispatch) => { 
  return StepAPIUtil.createStep(step).then(
    (step) => dispatch(receiveStep(step))
  )
}

export const deleteStep = (step) => (dispatch) => {
  return StepAPIUtil.deleteStep(step).then(
    (step) => dispatch(removeStep(step)), 
  )
}

export const receiveSteps = (steps) => ({ type: RECEIVE_STEPS, steps }); 
export const receiveStep = (step) => ({ type: RECEIVE_STEP, step }); 
export const removeStep = (step) => ({ type: REMOVE_STEP, step });

window.receiveStep = receiveStep; 
window.removeStep = removeStep; 
window.createStep = createStep;
window.deleteStep = deleteStep;