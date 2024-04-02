import { useState } from "react";
import "./App.css";
import Hello from "./Hello";

function App() {
  return (
    <>
      <Hello name="React" count={5}>
        <p>A small message for you!</p>
      </Hello>
    </>
  );
}

export default App;
