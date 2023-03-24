import React, { Component } from "react";
import Forms from "./CV-Form/Forms";
import Display from "./CV-Display/Display";
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
