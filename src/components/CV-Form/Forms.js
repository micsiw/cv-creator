import React, { Component } from "react";
import Education from "./Education";
import Personal from "./Personal";
import Skills from "./Skills";
import Languages from "./Languages";
import Experience from "./Experience";

class Forms extends Component {
  render() {
    return (
      <div className="forms">
        <Personal />
        <Education />
        <Skills />
        <Languages />
        <Experience />
      </div>
    );
  }
}

export default Forms;
