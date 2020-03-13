import * as SessionAPIUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER"; 

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
  SessionAPIUtil.postSession(user).then( 
    user => dispatch(receiveCurrentUser(user))
  )
)

export const logout = () => dispatch => ( 
  SessionAPIUtil.deleteSession().then( 
    () => dispatch(logoutCurrentUser()) 
  )
)