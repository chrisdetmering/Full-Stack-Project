import * as SessionAPIUTil from '../util/session_api_util';
export const RECEIVE_SESSION = "RECEIVE_SESSION";
export const DELETE_SESSION = "DELETE_SESSION"; 


export const receiveSession = (user) => (dispatch) => ( 
  SessionAPIUTil.postSession(user).then(
    (session) => dispatch(receiveSession(session))
  )
)

export const receiveSession = (session) => ({ 
  type: RECEIVE_SESSION, 
  session
})