import React from 'react'; 
import ReactDOM from 'react-dom'; 
import configureStore from './store/store'; 
import { Root } from './components/root';

const store = configureStore();

window.addEventListener('DOMContentLoaded', () => { 
 var root = document.getElementById('content');

  ReactDOM.render(<Root store={store}/>, root);

});

