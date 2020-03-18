import * as SessionAPIUtil from '../util/session_api_util';
import { receiveSessionErrors } from '../actions/error_session_actions'
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER"; 
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const receiveCurrentUser = (user) => ({ 
  type: RECEIVE_CURRENT_USER, 
  user
})

export const logoutCurrentUser = () => ({ 
  type: LOGOUT_CURRENT_USER
})

export const loginUser = user => dispatch => (
  SessionAPIUtil.postSession(user).then(
    user => dispatch(receiveCurrentUser(user))
  )
)
export const createUser = user => dispatch => ( 
  SessionAPIUtil.postUser(user).then( 
    user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveSessionErrors(errors.responseJSON))
  )
)

export const logout = () => dispatch => ( 
  SessionAPIUtil.deleteSession().then( 
    () => dispatch(logoutCurrentUser()) 
  )
)

window.loginUser = loginUser;

window.createUser = createUser;