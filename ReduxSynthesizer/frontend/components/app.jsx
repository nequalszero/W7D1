import React from 'react';
import SynthContainer from './synth/synth_container.jsx';

export default class App extends React.Component {
  render (){
    return (
      <div className="app">
        <SynthContainer />
      </div>
    );
  }
}
