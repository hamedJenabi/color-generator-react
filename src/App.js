import React from 'react';
import './App.css';
import './ColorGenerator.js';
import { generator } from './ColorGenerator.js';
import { useState } from 'react';

/***************************/

function App() {
  //using useState to get a new value with every click event
  let [coloring, setColoring] = useState('HERE');

  return (
    <div className="App">
      <header className="App-header">
        <h2>Hamed's Color Generator</h2>
        <div>
          You can click
          <br />
          <br />
          <button className="button" onClick={() => setColoring(generator())}>
            on this
          </button>
          <br />
          <br /> to get a random color <br />
          <br />
          <div
            className="Color"
            style={{
              color: coloring,
              borderColor: coloring,
            }}
          >
            {coloring}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
