import "./App.css";
import React, { useState } from "react";
import Timer from "./components/Timer";
import StopWatch from "./components/StopWatch";

function App() {
  const [status, setStatus] = useState(false);

  return (
    <div>
      <div>
        <button onClick={() => setStatus(false)}>Timer</button>
        <button onClick={() => setStatus(true)}>StopWatch</button>
      </div>
      <div>{status ? <StopWatch /> : <Timer />}</div>
    </div>
  );
}

export default App;
