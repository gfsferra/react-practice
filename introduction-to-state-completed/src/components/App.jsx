import React from "react";

function App() {

  var isDone = false

  function strike() {
    isDone = true
  }
  function unStrike() {
    isDone = false
  }

  return (
    <div>
      <p style={isDone ? { textDecoration: "line-through" } : null} >Buy milk</p>
      <button onClick={strike} >Change to strike</button>
      <button onClick={unStrike} >Change back</button>
    </div>
  );
}

export default App;
