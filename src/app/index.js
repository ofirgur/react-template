import React, { useState, useEffect } from 'react';

import { Counter } from './Counter';

const App = () => {
    const [count, setCount] = useState(0);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
    });

    return (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
          <h1>This is my React app!</h1>
          <br />
          <Counter />
        </div>
      );
};

export default App;