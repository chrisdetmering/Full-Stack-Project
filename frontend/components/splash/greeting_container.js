import { connect } from 'react-redux'; 
import Greeting from './greeting';
import { logout } from '../../actions/session_actions'

const mapDispatchToprops = dispatch => ({ 
  logout:  (user) => dispatch(logout(user))
})

const mapStateToProps = (state) => ({ 
  currentUser: state.entities.user[state.session.currentUser]
})

const GreetingContainer = connect(
  mapStateToProps,
  mapDispatchToprops)(Greeting);

  export default GreetingContainer;
