import * as SessionAPIUTil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const DELETE_SESSION = "DELETE_SESSION"; 

export const receiveCurrentUser = (user) => ({ 
  type: RECEIVE_CURRENT_USER, 
  user
})

export const loginUser = (user) => (dispatch) => (
  SessionAPIUTil.postSession(user).then(
    (session) => dispatch(receiveCurrentUser(session))
  )
)