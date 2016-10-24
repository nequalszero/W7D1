import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';
import Note from './util/note.js';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.getElementById('root'));
});
