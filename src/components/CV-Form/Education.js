import React, { Component } from "react";

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: [],
      educationInputs: [],
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }

  handleAdd() {
    this.setState({
      inputs: this.state.inputs.concat(
        <EducationInputs
          key={this.state.inputs.length}
          id={this.state.inputs.length}
          remove={this.handleRemove.bind(this, this.state.inputs.length)}
          handleYearChange={this.handleYearChange}
          handleNameChange={this.handleNameChange}
          handleTitleChange={this.handleTitleChange}
        />
      ),
      educationInputs: this.state.educationInputs.concat({
        id: this.state.educationInputs.length,
        graduation: "",
        name: "",
        title: "",
      }),
    });
  }

  handleRemove(id) {
    const updatedInputs = this.state.inputs.filter(
      (input) => input.key !== id.toString()
    );
    const updatedEducationInputs = this.state.educationInputs.filter(
      (input) => input.id !== id
    );

    this.setState({
      inputs: updatedInputs,
      educationInputs: updatedEducationInputs,
    });
    this.props.onEducationInputsChange(updatedEducationInputs);
  }

  handleYearChange(id, yearInput) {
    const updatedEducationInputs = this.state.educationInputs.map((record) => {
      if (record.id === id) {
        return { ...record, graduation: yearInput };
      } else {
        return record;
      }
    });
    this.setState({ educationInputs: updatedEducationInputs });
    this.props.onEducationInputsChange(updatedEducationInputs);
  }

  handleNameChange(id, nameInput) {
    const updatedEducationInputs = this.state.educationInputs.map((record) => {
      if (record.id === id) {
        return { ...record, name: nameInput };
      } else {
        return record;
      }
    });
    this.setState({ educationInputs: updatedEducationInputs });
    this.props.onEducationInputsChange(updatedEducationInputs);
  }

  handleTitleChange(id, titleInput) {
    const updatedEducationInputs = this.state.educationInputs.map((record) => {
      if (record.id === id) {
        return { ...record, title: titleInput };
      } else {
        return record;
      }
    });
    this.setState({ educationInputs: updatedEducationInputs });
    this.props.onEducationInputsChange(updatedEducationInputs);
  }

  render() {
    return (
      <div className="education-info">
        <h3 className="form-title education-title">Education</h3>
        {this.state.inputs}
        <button
          className="education-add-button add-button"
          onClick={this.handleAdd}
        >
          Add new position
        </button>
      </div>
    );
  }
}

class EducationInputs extends Component {
  constructor(props) {
    super(props);

    this.id = this.props.id;
    this.setYear = this.setYear.bind(this);
    this.setName = this.setName.bind(this);
    this.setTitle = this.setTitle.bind(this);
  }

  setYear(e) {
    this.props.handleYearChange(this.id, e.target.value);
  }

  setName(e) {
    this.props.handleNameChange(this.id, e.target.value);
  }

  setTitle(e) {
    this.props.handleTitleChange(this.id, e.target.value);
  }

  render() {
    return (
      <div className="education-inputs">
        <input
          type="text"
          id="year"
          placeholder="Graduation year"
          onChange={this.setYear}
        />
        <input
          type="text"
          id="institution"
          placeholder="College/University"
          onChange={this.setName}
        />
        <input
          type="text"
          id="degree"
          placeholder="Your degree"
          onChange={this.setTitle}
        />
        <button className="remove-button" onClick={this.props.remove}>
          &#10006;
        </button>
      </div>
    );
  }
}

export default Education;
