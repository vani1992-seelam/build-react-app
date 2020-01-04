import React, { Component } from "react";
import Aux from "../../../hoc/Aux";
import classes from "./Person.css";

class Person extends Component {
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
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

export default Person;