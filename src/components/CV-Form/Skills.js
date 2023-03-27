import React, { Component } from "react";

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: [],
      skills: [],
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleSkillChange = this.handleSkillChange.bind(this);
  }

  handleAdd() {
    this.setState({
      inputs: this.state.inputs.concat(
        <SkillsInputs
          key={this.state.inputs.length}
          id={this.state.inputs.length}
          remove={this.handleRemove.bind(this, this.state.inputs.length)}
          handleSkillChange={this.handleSkillChange}
        />
      ),
      skills: this.state.skills.concat({
        id: this.state.skills.length,
        skill: "",
      }),
    });
  }

  handleRemove(id) {
    const updatedInputs = this.state.inputs.filter(
      (input) => input.key !== id.toString()
    );
    const updatedSkillInputs = this.state.skills.filter(
      (input) => input.id !== id
    );

    this.setState({
      inputs: updatedInputs,
      skills: updatedSkillInputs,
    });
    this.props.onSkillsInputsChange(updatedSkillInputs);
  }

  handleSkillChange(id, skillInput) {
    const updatedSkillInputs = this.state.skills.map((record) => {
      if (record.id === id) {
        return { ...record, skill: skillInput };
      } else {
        return record;
      }
    });
    this.setState({ skills: updatedSkillInputs });
    this.props.onSkillsInputsChange(updatedSkillInputs);
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
  constructor(props) {
    super(props);

    this.id = this.props.id;
    this.setSkill = this.setSkill.bind(this);
  }

  setSkill(e) {
    this.props.handleSkillChange(this.id, e.target.value);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          id="skill"
          placeholder="Skill / Technology / Expertise"
          onChange={this.setSkill}
        />
        <button onClick={this.props.remove}>Remove</button>
      </div>
    );
  }
}

export default Skills;
