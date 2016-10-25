import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';
import configureStore from './store/store.js';
import Root from './components/root.jsx';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  ReactDOM.render(< Root store={store} />, document.getElementById('root'));
});
