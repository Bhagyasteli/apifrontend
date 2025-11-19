import React from "react";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: "20px" }}>
        <h1>Dashboard Page</h1>
        <p>Here your ports or main content will appear.</p>
      </div>
    </div>
  );
}

export default App;
