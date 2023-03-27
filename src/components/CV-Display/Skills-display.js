import React, { Component } from "react";

class SkillsDisplay extends Component {
  render() {
    return (
      <div className="skills">
        <h3>Skills</h3>
        {this.props.skills.map((skill) => {
          return (
            <div key={skill.id}>
              <div className="skill">{skill.skill}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SkillsDisplay;
