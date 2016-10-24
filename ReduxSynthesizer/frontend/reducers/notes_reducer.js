import {KEY_PRESSED, KEY_RELEASED} from '../actions/notes_actions.js';
import { NOTE_NAMES } from '../util/tones.js';
import union from 'lodash/union';
import merge from 'lodash/merge';


const validNote = key => (
  NOTE_NAMES.includes(key)
);

const reducer = (oldState = [], action) => {
  Object.freeze(oldState);

  if (validNote(action.key)) {
    switch (action.type) {
      case KEY_PRESSED:
        return union(oldState, [action.key]);

      case KEY_RELEASED:
        const idx = oldState.indexOf(action.key);
        if (idx !== -1){
          const newState = merge([], oldState);
          newState.splice(idx, 1);
          return newState;
        } else {
          return oldState;
        }

      default:
        return oldState;
    }
  } else {
    return oldState;
  }
};

export default reducer;
