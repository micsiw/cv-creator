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
  }

  handleAdd() {
    this.setState({
      inputs: this.state.inputs.concat(
        <EducationInputs
          key={this.state.inputs.length}
          id={this.state.inputs.length}
          remove={this.handleRemove.bind(this, this.state.inputs.length)}
          handleYearChange={this.handleYearChange}
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
    this.setState({
      inputs: this.state.inputs.filter((input) => input.key !== id.toString()),
    });
  }

  // handleYearChange(id, yearInput) {
  //   console.log("year input " + yearInput);
  //   this.setState({
  //     educationInputs: (this.state.educationInputs[] = {
  //       id: "",
  //       year: "1993",
  //       name: "",
  //       title: "",
  //     }),
  //   });
  //   console.log(this.state.educationInputs);
  //   this.props.onEducationInputsChange(this.state.educationInputs);
  // }

  // handleYearChange(id, yearInput) {
  //   console.log("year input " + yearInput);
  //   const { educationInputs } = this.state;
  //   const recordIndex = educationInputs.findIndex((record) => record.id === id);
  //   const updatedRecord = { ...educationInputs[recordIndex], year: yearInput };
  //   const updatedInputs = [...educationInputs];
  //   updatedInputs[recordIndex] = updatedRecord;

  //   this.setState({ educationInputs: updatedInputs });
  //   this.props.onEducationInputsChange(this.state.educationInputs);
  // }

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

  render() {
    return (
      <div className="personal-info">
        <h3>Education</h3>
        {this.state.inputs}
        <button onClick={this.handleAdd}>Add new position</button>
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
      <div>
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
        <button onClick={this.props.remove}>Remove</button>
      </div>
    );
  }
}

export default Education;
