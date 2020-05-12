import React from 'react';
import './App.css';
import './ColorGenerator.js';
import { generator } from './ColorGenerator.js';
import { useState } from 'react';

// const styles = {
//   myButton: {
//     color: generator,
//   },
// };

// let styleGenerator = {
//   color: generator,
// };

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
/**++++++++ */

/***************************/

function App() {
  let [coloring, setColoring] = useState(generator());

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
