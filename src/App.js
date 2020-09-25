import React from "react";
import "./App.css";
import Grid from "./Grid/Grid";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Home />
        <Grid />
      </div>
    </div>
  );
}

export default App;
