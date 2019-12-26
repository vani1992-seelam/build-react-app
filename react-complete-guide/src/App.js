import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = props => {
  const [personsState, setPersonsState] = useState({
    Persons: [
      { name: "Roni", age: 27 },
      { name: "Tommy", age: 4 },
      { name: "Ivans", age: 28 }
    ]
  });
  const [otherState, setOtherState] = useState("some other value");
  console.log(personsState, otherState);

  const switchNameHandler = () => {
    //console.log("Clicked!!!");
    setPersonsState({
      Persons: [
        { name: "Roni seg", age: 27 },
        { name: "Tommy", age: 4 },
        { name: "Ivans", age: 43 }
      ]
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>Thsi is testing!</p>
      <button onClick={switchNameHandler}>Switch Names</button>
      <Person
        name={personsState.Persons[0].name}
        age={personsState.Persons[0].age}
      />
      <Person
        name={personsState.Persons[1].name}
        age={personsState.Persons[1].age}
      >
        My Hobbies: Music{" "}
      </Person>
      <Person
        name={personsState.Persons[2].name}
        age={personsState.Persons[2].age}
      />
    </div>
  );
};

export default App;
