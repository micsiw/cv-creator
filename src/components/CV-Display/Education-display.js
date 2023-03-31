import React, { Component } from "react";

class EducationDisplay extends Component {
  render() {
    return (
      <div className="education">
        <h3 className="title-section">Education</h3>
        <div className="education-content">
          {this.props.education.map((position) => {
            return (
              <div key={position.id}>
                <div className="graduation-year">{position.graduation}</div>
                <div className="school-name">{position.name}</div>
                <div className="school-title">{position.title}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default EducationDisplay;
