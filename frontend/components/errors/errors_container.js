import { connect } from 'react-redux'; 
import Errors from './errors';

const mapStateToProps = state => ({ 
  errors: state.errors.session
})

const ErrorsContainer = connect(mapStateToProps)(Errors); 

export default ErrorsContainer;