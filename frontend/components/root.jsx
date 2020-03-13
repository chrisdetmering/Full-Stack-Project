import React from 'react';
import { Provider } from 'react-redux';
import { App } from './app'; 
import { 
  HashRouter as Router, 
} from 'react-router-dom'

export const Root = ({ store }) => ( 
  <Provider store={store}> 
     <Router>
       <App />
     </Router>
  </Provider> 
)