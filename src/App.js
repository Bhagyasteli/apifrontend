

import React, { useState } from "react";

function App() {
  const [output, setOutput] = useState("");

  const runBinary = async () => {
    try {
      const res = await fetch("http://localhost:5000/run-c-binary");
      const data = await res.json();
      setOutput(data.output);
    } catch (err) {
      console.error("Error calling API:", err);
      setOutput("Error calling API");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>React + Node + C Binary Demo</h1>
      <button onClick={runBinary}>Run C Binary</button>
      <pre>{output}</pre>
    </div>
  );
}

export default App;

