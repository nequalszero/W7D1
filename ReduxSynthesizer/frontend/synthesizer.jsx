import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';
import configureStore from './store/store.js';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  ReactDOM.render(<App />, document.getElementById('root'));
  window.store = store;
});
