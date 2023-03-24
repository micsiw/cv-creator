import React, { Component } from "react";
import "../../styles/Display.css";

class Display extends Component {
  render() {
    return (
      <div className="display-wrapper">
        <div className="display">
          <div className="photo">PHOTO</div>
          <div className="introduction">Introduction</div>
          <div className="contact">Contact</div>
          <div className="experience">Experience</div>
          <div className="education">Education</div>
          <div className="skills">Skills</div>
          <div className="language">Language</div>
        </div>
      </div>
    );
  }
}

export default Display;
