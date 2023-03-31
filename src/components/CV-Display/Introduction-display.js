import React, { Component } from "react";

class IntroductionDisplay extends Component {
  render() {
    return (
      <div className="introduction">
        <div className="name-section">
          <p className="first-name">{this.props.firstName}</p>
          <p className="last-name">{this.props.lastName}</p>
        </div>
        <p className="job-title">{this.props.jobTitle}</p>
        <p className="personal-description">{this.props.personalDescription}</p>
      </div>
    );
  }
}

export default IntroductionDisplay;
