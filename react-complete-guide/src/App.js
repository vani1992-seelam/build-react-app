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
    otherState: "some other value",
    showPersons: false
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

  nameChangedHandler = event => {
    this.setState({
      Persons: [
        { name: "Max", age: 27 },
        { name: event.target.value, age: 4 },
        { name: "Ivans", age: 43 }
      ]
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid green",
      padding: "8px",
      cursor: "pointer"
    };
    var persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.Persons.map(person => {
            return <Person name={person.name} age={person.age} />;
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>Thsi is testing!</p>
        {/* alternate arrow function for binding  */}
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
