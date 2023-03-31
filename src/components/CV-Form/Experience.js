import React, { Component } from "react";

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: [],
      experience: [],
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleCompanyChange = this.handleCompanyChange.bind(this);
    this.handlePositionChange = this.handlePositionChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
  }

  handleAdd() {
    this.setState({
      inputs: this.state.inputs.concat(
        <ExperienceInputs
          key={this.state.inputs.length}
          id={this.state.inputs.length}
          remove={this.handleRemove.bind(this, this.state.inputs.length)}
          handleTimeChange={this.handleTimeChange}
          handleCompanyChange={this.handleCompanyChange}
          handlePositionChange={this.handlePositionChange}
          handleDescriptionChange={this.handleDescriptionChange}
        />
      ),
      experience: this.state.experience.concat({
        id: this.state.experience.length,
        time: "",
        company: "",
        position: "",
        description: "",
      }),
    });
  }

  handleRemove(id) {
    const updatedInputs = this.state.inputs.filter(
      (input) => input.key !== id.toString()
    );
    const updatedExperienceInputs = this.state.experience.filter(
      (input) => input.id !== id
    );

    this.setState({
      inputs: updatedInputs,
      experience: updatedExperienceInputs,
    });
    this.props.onExperienceInputsChange(updatedExperienceInputs);
  }

  handleTimeChange(id, timeInput) {
    const updatedExperienceInputs = this.state.experience.map((record) => {
      if (record.id === id) {
        return { ...record, time: timeInput };
      } else {
        return record;
      }
    });
    this.setState({ experience: updatedExperienceInputs });
    this.props.onExperienceInputsChange(updatedExperienceInputs);
  }

  handleCompanyChange(id, companyInput) {
    const updatedExperienceInputs = this.state.experience.map((record) => {
      if (record.id === id) {
        return { ...record, company: companyInput };
      } else {
        return record;
      }
    });
    this.setState({ experience: updatedExperienceInputs });
    this.props.onExperienceInputsChange(updatedExperienceInputs);
  }

  handlePositionChange(id, positionInput) {
    const updatedExperienceInputs = this.state.experience.map((record) => {
      if (record.id === id) {
        return { ...record, position: positionInput };
      } else {
        return record;
      }
    });
    this.setState({ experience: updatedExperienceInputs });
    this.props.onExperienceInputsChange(updatedExperienceInputs);
  }

  handleDescriptionChange(id, descriptionInput) {
    const updatedExperienceInputs = this.state.experience.map((record) => {
      if (record.id === id) {
        return { ...record, description: descriptionInput };
      } else {
        return record;
      }
    });
    this.setState({ experience: updatedExperienceInputs });
    this.props.onExperienceInputsChange(updatedExperienceInputs);
  }

  render() {
    return (
      <div className="experience-info">
        <h3 className="form-title experience-form-title">Experience</h3>
        {this.state.inputs}
        <button className="add-button" onClick={this.handleAdd}>
          Add new position
        </button>
      </div>
    );
  }
}

class ExperienceInputs extends Component {
  constructor(props) {
    super(props);

    this.id = this.props.id;
    this.setTime = this.setTime.bind(this);
    this.setCompany = this.setCompany.bind(this);
    this.setPosition = this.setPosition.bind(this);
    this.setDescription = this.setDescription.bind(this);
  }

  setTime(e) {
    this.props.handleTimeChange(this.id, e.target.value);
  }

  setCompany(e) {
    this.props.handleCompanyChange(this.id, e.target.value);
  }

  setPosition(e) {
    this.props.handlePositionChange(this.id, e.target.value);
  }

  setDescription(e) {
    this.props.handleDescriptionChange(this.id, e.target.value);
  }

  render() {
    return (
      <div className="experience-inputs">
        <input
          type="text"
          id="time-frames"
          placeholder="Time frames"
          onChange={this.setTime}
        />
        <input
          type="text"
          id="company-name"
          placeholder="Company name"
          onChange={this.setCompany}
        />
        <input
          type="text"
          id="position"
          placeholder="Position name"
          onChange={this.setPosition}
        />
        <textarea
          id="job-description"
          placeholder="Description"
          onChange={this.setDescription}
        />
        <button
          className="remove-button experience-remove"
          onClick={this.props.remove}
        >
          &#10006;
        </button>
      </div>
    );
  }
}

export default Experience;
