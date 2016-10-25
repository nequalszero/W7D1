import React from 'react';

class NoteKey {
  constructor({note, pressed}){
    super({note, pressed});
    this.note = note;
  }

  render() {
    return (
      <h1>
        {this.note}
      </h1>
    );
  }
}

export const NoteKey = {note, pressed} => (
  note
)

// export default NoteKey;
