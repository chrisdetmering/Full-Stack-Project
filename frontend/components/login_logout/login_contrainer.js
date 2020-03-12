import { connect } from 'react-redux';
import { postSession } from '../../actions/session_actions'
import Login from './login'

const mapDispatchToProps = dispatch => ({
  postSession: (user) => dispatch(postSession(user))
})
const LoginContainer = connect(null, mapDispatchToProps)(Login)

export default LoginContainer;