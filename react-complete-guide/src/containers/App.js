import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js ] Constructor");
  }
  state = {
    persons: [
      { id: "abcd1", name: "Roni", age: 27 },
      { id: "abcd2", name: "Tommy", age: 4 },
      { id: "abcd3", name: "Ivans", age: 28 }
    ],
    otherState: "some other value",
    showPersons: false,
    showCockpit: true
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js ] getDerivedStateFromProps", props);
    return state;
  }

  // componentWillMount() {
  //   console.log("[App.js ] componentWillMount");
  // }

  componentDidMount() {
    console.log("[App.js ] componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js ] shouldComponentUpdate");
    return true;
  }

  componentDidUpdate() {
    console.log("[App.js ] componentDidUpdate");
  }

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
    console.log("[App.js ] render");
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <div className={classes.App}>
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Remove Button
        </button>
        {this.state.showCockpit ? (
          <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}
          />
        ) : null}
        {persons}
      </div>
    );
  }
}

export default App;
