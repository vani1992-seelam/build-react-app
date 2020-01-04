import React, { Component } from "react";
import PropTypes from "prop-types";
import Aux from "../../../hoc/Aux";
import withClass from "../../../hoc/withClass";
import classes from "./Person.css";

class Person extends Component {
  constructor() {
    super();
    this.inputElementRef = React.createRef();
  }
  //ref. focus on elements in normal way
  // componentDidMount() {
  //   document.querySelector("input").focus();
  // }
  // by using ref.
  componentDidMount() {
    //this.inputElement.focus();
    this.inputElementRef.current.focus();
  }
  render() {
    console.log("[Person.js ] rendering ");
    return (
      <Aux>
        <p onClick={this.props.click}>
          I'm {this.props.name} and i am {this.props.age} years old
        </p>
        <p key="i2">{this.props.children}</p>
        <input
          key="i2"
          //component
          // ref={inputEl => {
          //   this.inputElement = inputEl;
          // }}
          //by constructor
          ref={this.inputElementRef}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);
