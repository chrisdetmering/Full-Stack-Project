import { connect } from 'redux'; 
import Greeting from './greeting';
import { logoutUser } from '../../actions/session_actions'

const mapDispatchToprops = dispatch => ({ 
  logout:  (user) => dispatch(logoutUser(user))
})

const mapStateToProps = (state) => ({ 
  currentUser: state.entities.users[state.session.currentUser]
})


const GreetingContainer = connect(
  mapDispatchToprops,
  mapStateToProps)(Greeting);

  export default GreetingContainer;
