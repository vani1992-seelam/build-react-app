import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    Persons: [
      { name: "Roni", age: 27 },
      { name: "Tommy", age: 4 },
      { name: "Ivans", age: 28 }
    ]
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>Thsi is testing!</p>
        <button>Switch Names</button>
        <Person
          name={this.state.Persons[0].name}
          age={this.state.Persons[0].age}
        />
        <Person
          name={this.state.Persons[1].name}
          age={this.state.Persons[1].age}
        >
          My Hobbies: Music{" "}
        </Person>
        <Person
          name={this.state.Persons[2].name}
          age={this.state.Persons[2].age}
        />
      </div>
    );
  }
}

export default App;
