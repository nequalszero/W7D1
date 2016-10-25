import React from 'react';
import Note from '../../util/note.js';
import { NOTE_NAMES, TONES } from '../../util/tones.js';
import merge from 'lodash/merge';
import $ from 'jquery';

class Synth extends React.Component {
  constructor(props){
    super(props);

    this.notes = merge({}, TONES);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);

    for(let key in this.notes) {
      this.notes[key] = new Note(this.notes[key]);
    }
  }

  componentDidMount() {
    $(document).on('keydown', e => this.onKeyDown(e));
    $(document).on('keyup', e => this.onKeyUp(e));
  }

  onKeyDown(e) {
    e.preventDefault();
    this.props.keyPressed(e.key);
  }

  onKeyUp(e) {
    e.preventDefault();
    this.props.keyReleased(e.key);
  }

  playNotes(){
    for(let key in this.notes) {
      if (this.props.notes.includes(key)){
        console.log(`playing ${key}`);
        this.notes[key].start();
      } else {
        this.notes[key].stop();
      }
    }
  }

  render() {
    this.playNotes();
    return (
      <div>
        Synth
        <ul>
          {NOTE_NAMES.map((key) => <li key={key} onKeyPress={this.onKeyDown} onKeyUp={this.onKeyUp}>{key}</li>) }
        </ul>
      </div>
    );
  }
}

export default Synth;
