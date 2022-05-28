import React from "react";
import { useState } from "react";

function App() {
  const [time, setTime] = useState("TIME");
  function getTime() {
    let currentTime = new Date().toLocaleTimeString();
    setTime(currentTime);
  }
  setInterval(getTime, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
