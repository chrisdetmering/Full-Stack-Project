import { connect } from 'react-redux';
import { createUser } from '../../actions/session_actions';
import SignUp from './signup';

const mapDispatchToProps = dispatch => ({ 
  createUser: (user) => dispatch(createUser(user))
})

const SignUpContainer = connect(null, mapDispatchToProps)(SignUp)

export default SignUpContainer; 