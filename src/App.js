import React, { useState } from 'react';
import './App.css';
import './ColorGenerator.js';
import { generator } from './ColorGenerator.js';
let styleGenerator = {
  color: generator,
};

// function Example() {
//   // Declare a new state variable, which we'll call "count"
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Hamed's Color Generator</h2>
        <p>
          You can click
          <br />
          <br />
          <button className="button" onClick={generator}>
            on this
          </button>
          <br />
          <br /> to get a random color <br />{' '}
          <h1 style={styleGenerator}>HERE</h1>
        </p>
      </header>
    </div>
  );
}

export default App;
