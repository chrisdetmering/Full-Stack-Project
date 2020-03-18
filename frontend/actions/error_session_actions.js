export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS"; 
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveSessionErrors = (errors) => ({ 
  type: RECEIVE_SESSION_ERRORS, 
  errors
}); 

export const clearErrors = () => ({ type: CLEAR_ERRORS }); 