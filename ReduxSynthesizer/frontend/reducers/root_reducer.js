import { combineReducers } from 'redux';
import notes_reducer from './notes_reducer.js';

const rootReducer = combineReducers({
  notes: notes_reducer
});

export default rootReducer;
