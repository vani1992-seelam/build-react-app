import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";
import Person from "./Person/Person";

const StyledButton = styled.button`
  background-color: ${props => (props.alt ? "red" : "green")};
  color: white;
  font: inherit;
  border: 1px solid green;
  padding: 8px;
  cursor: pointer;

  &:hover {
    backgroundcolor: $(props => props.alt ? "pink": "green");
    color: gray;
  }
`;

class App extends Component {
  state = {
    persons: [
      { id: "abcd1", name: "Roni", age: 27 },
      { id: "abcd2", name: "Tommy", age: 4 },
      { id: "abcd3", name: "Ivans", age: 28 }
    ],
    otherState: "some other value",
    showPersons: false
  };

  switchNameHandler = newName => {
    //console.log("Clicked!!!");
    this.setState({
      persons: [
        { name: newName, age: 27 },
        { name: "Tommy", age: 4 },
        { name: "Ivans", age: 43 }
      ]
    });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(per => per.id === id);

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

  deletePersonHandler = personIndex => {
    //const persons = this.state.Persons;
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid green",
      padding: "8px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "light green",
        color: "gray"
      }
    };
    var persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      // style.backgroundColor = "red";
      // style[":hover"] = {
      //   backgroundColor: "light green",
      //   color: "gray"
      // };
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red"); //classes = 'red'
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold"); //classes = 'red'&'bold'
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(" ")}>This is testing!</p>
        {/* alternate arrow function for binding  */}
        <StyledButton
          alt={this.state.showPersons}
          onClick={this.togglePersonsHandler}
        >
          Toggle Persons
        </StyledButton>
        {persons}
      </div>
    );
  }
}

export default App;
