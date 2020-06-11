import React, { useState } from "react";

import "./App.css";

import { fizzBuzz } from "./fizzbuzz";

function App() {
  const [num, setNum] = useState(15);
  return (
    <div className="App">
      <p>The number: {num} says</p>
      <div className="outputDisplay">
        <button onClick={() => setNum(num - 1)}>Decrement Number</button>
        <p>{fizzBuzz(num)}</p>
        <button onClick={() => setNum(num + 1)}>Increment Number</button>
      </div>
    </div>
  );
}

export default App;
