import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer.js';

const configureStore = (preloadedState = {}) => (
  createStore(rootReducer, preloadedState)
);

export default configureStore;
