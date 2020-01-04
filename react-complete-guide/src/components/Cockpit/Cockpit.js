import React, { useEffect, useRef } from "react";
import classes from "./Cockpit.css";
import AuthContext from "../../context/auth-context";

const cockpit = props => {
  const toggleBtnRef = useRef(null);
  useEffect(() => {
    console.log("[cockpit.js] useEffect");
    //HTTP request.....
    // const timer = setTimeout(() => {
    //   alert("Saved!!");
    // }, 1000);
    toggleBtnRef.current.click();
    return () => {
      clearTimeout();
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
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
      <AuthContext.Consumer>
        {context => <button onClick={context.login}>Log IN</button>}
      </AuthContext.Consumer>
    </div>
  );
};

export default React.memo(cockpit);
