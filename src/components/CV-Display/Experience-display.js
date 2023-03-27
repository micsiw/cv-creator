import React, { Component } from "react";

class ExperienceDisplay extends Component {
  render() {
    return (
      <div className="experience">
        <h3>Experience</h3>
        {this.props.experience.map((position) => {
          return (
            <div key={position.id}>
              <div className="experience-time">{position.time}</div>
              <div className="company-name">{position.company}</div>
              <div className="position">{position.position}</div>
              <div className="experience-description">
                {position.description}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ExperienceDisplay;
