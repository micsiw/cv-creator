import React, { Component } from "react";

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: [
        <SkillsInputs key={0} remove={this.handleRemove.bind(this, 0)} />,
      ],
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleAdd() {
    this.setState({
      inputs: this.state.inputs.concat(
        <SkillsInputs
          key={this.state.inputs.length}
          remove={this.handleRemove.bind(this, this.state.inputs.length)}
        />
      ),
    });
  }

  handleRemove(id) {
    this.setState({
      inputs: this.state.inputs.filter((input) => input.key !== id.toString()),
    });
  }

  render() {
    return (
      <div className="skills-info">
        <h3>Skills</h3>
        {this.state.inputs}
        <button onClick={this.handleAdd}>Add new skill</button>
      </div>
    );
  }
}

class SkillsInputs extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          id="skill"
          placeholder="Skill / Technology / Expertise"
        />
        <button onClick={this.props.remove}>Remove</button>
      </div>
    );
  }
}

export default Skills;
