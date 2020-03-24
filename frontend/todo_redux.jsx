import React from 'react'; 
import ReactDOM from 'react-dom'; 
import configureStore from './store/store'; 
import { Root } from './components/root';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faCommentAlt)

const store = configureStore();
window.store = store

window.addEventListener('DOMContentLoaded', () => { 
 var root = document.getElementById('content');

  ReactDOM.render(<Root store={store}/>, root);

});

