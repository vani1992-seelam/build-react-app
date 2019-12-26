import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    Persons: [
      { name: "Roni", age: 27 },
      { name: "Tommy", age: 4 },
      { name: "Ivans", age: 28 }
    ],
    otherState: "some other value"
  };

  switchNameHandler = newName => {
    //console.log("Clicked!!!");
    this.setState({
      Persons: [
        { name: newName, age: 27 },
        { name: "Tommy", age: 4 },
        { name: "Ivans", age: 43 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>Thsi is testing!</p>
        {/* alternate arrow function for binding  */}
        <button onClick={() => this.switchNameHandler("Maxiwill")}>
          Switch Names
        </button>
        <Person
          name={this.state.Persons[0].name}
          age={this.state.Persons[0].age}
        />
        <Person
          name={this.state.Persons[1].name}
          age={this.state.Persons[1].age}
          // passing methos refrences between components
          click={this.switchNameHandler.bind(this, "Maxwill2")}
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
