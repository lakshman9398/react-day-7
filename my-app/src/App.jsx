import React, { useState, useMemo, useCallback } from "react";

function App() {
  // State for number and count
  const [number, setNumber] = useState(5);
  const [count, setCount] = useState(0);

  // useMemo: Calculates square only when 'number' changes
  const square = useMemo(() => {
    console.log("Calculating square...");
    return number * number;
  }, [number]);

  // useCallback: Function is created only once
  const showMessage = useCallback(() => {
    console.log("Hello!");
    alert("Hello!");
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>useMemo & useCallback Example</h1>

      <h2>Number: {number}</h2>
      <h2>Square: {square}</h2>

      <button onClick={() => setNumber(number + 1)}>
        Change Number
      </button>

      <hr />

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment Count
      </button>

      <button
        onClick={showMessage}
        style={{ marginLeft: "10px" }}
      >
        Show Message
      </button>
    </div>
  );
}

export default App;