import React, { Component } from "react";

class SkillsDisplay extends Component {
  render() {
    return (
      <div className="skills">
        <h3 className="title-section">Skills</h3>
        <div className="skills-content">
          {this.props.skills.map((skill) => {
            return (
              <div key={skill.id}>
                <div className="skill">
                  <span className="marker">•</span> {skill.skill}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default SkillsDisplay;
