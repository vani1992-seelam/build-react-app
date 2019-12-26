import React from "react";
import "./App.css";
import Person from "./Person/Person";

function App() {
  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>Thsi is testing!</p>
      <Person name="Roni" age="27" />
      <Person name="Tommy" age="4">
        My Hobbies: Music{" "}
      </Person>
      <Person name="Iyans" age="22" />
    </div>
  );
}

export default App;
