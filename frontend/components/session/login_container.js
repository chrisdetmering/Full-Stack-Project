import { connect } from 'react-redux';
import { loginUser } from '../../actions/session_actions'
import Login from './login'

const mapDispatchToProps = dispatch => ({
  loginUser: (user) => dispatch(loginUser(user))
})
const LoginContainer = connect(null, mapDispatchToProps)(Login)

export default LoginContainer;