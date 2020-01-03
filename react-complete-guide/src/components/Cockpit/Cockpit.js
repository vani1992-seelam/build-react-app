import React, { useEffect } from "react";
import classes from "./Cockpit.css";

const cockpit = props => {
  useEffect(() => {
    console.log("[cockpit.js] useEffect");
    //HTTP request.....
    setTimeout(() => {
      alert("Saved!!");
    }, 1000);
  }, []);

  //[props.persons] == when the prsons will change.
  //[] == pass empty array (if you want to use for the frst time)

  const assignedClasses = [];
  let btnClass = " ";
  if (props.showPersons) {
    btnClass = classes.Red;
  }
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red); //classes = 'red'
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold); //classes = 'red'&'bold'
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is testing!</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;
