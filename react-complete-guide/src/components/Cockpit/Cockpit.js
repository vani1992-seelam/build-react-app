import React, { useEffect } from "react";
import classes from "./Cockpit.css";

const cockpit = props => {
  useEffect(() => {
    console.log("[cockpit.js] useEffect");
    //HTTP request.....
    const timer = setTimeout(() => {
      alert("Saved!!");
    }, 1000);
    return () => {
      clearTimeout(timer);
      console.log("[cockpit.js] clean up work in useEffect");
    };
  }, []);

  //[props.persons] == when the prsons will change.
  //[] == pass empty array (if you want to use for the frst time)

  useEffect(() => {
    console.log("[cockpit.js] 2nd useEffect");
    return () => {
      console.log("[cockpit.js] clean up work 2nd useeffect");
    };
  });

  const assignedClasses = [];
  let btnClass = " ";
  if (props.showPersons) {
    btnClass = classes.Red;
  }
  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red); //classes = 'red'
  }
  if (props.personsLength <= 1) {
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

export default React.memo(cockpit);
