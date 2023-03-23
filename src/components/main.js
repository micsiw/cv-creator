import React, { Component } from "react";
import Forms from "./CV-Form/forms";
import Display from "./CV-Display/display";
import "../styles/Main.css";

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Forms />
        <Display />
      </div>
    );
  }
}

export default Main;
