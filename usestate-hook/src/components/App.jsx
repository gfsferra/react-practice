import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1)
  }

  function decrease() {
    setCount(count - 1)
  }
  function double() {
    setCount(count * 2)
  }
  function half() {
    setCount(count / 2)
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={double}>x2</button>
      <button onClick={half}>/2</button>
    </div>
  );
}

export default App;
