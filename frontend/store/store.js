import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import { thunk } from '../middleware/thunk';
import rootReducer from '../reducers/root_reducer';


const configureStore = () => {  
  const store = createStore(rootReducer, applyMiddleware(thunk));
  return store 
 }

export default configureStore; 