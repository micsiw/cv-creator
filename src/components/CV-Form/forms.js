import React, { Component } from "react";
import Education from "./education";
import Personal from "./personal";

class Forms extends Component {
  render() {
    return (
      <div className="forms">
        <Personal />
        <Education />
      </div>
    );
  }
}

export default Forms;
