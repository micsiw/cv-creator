import React, { Component } from "react";

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: [
        <EducationInputs key={0} remove={this.handleRemove.bind(this, 0)} />,
      ],
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.saySiema = this.saySiema.bind(this);
  }

  saySiema() {
    console.log("siema");
  }

  handleAdd() {
    this.setState({
      inputs: this.state.inputs.concat(
        <EducationInputs
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
      <div className="personal-info">
        <h3>Education</h3>
        {this.state.inputs}
        <button onClick={this.handleAdd}>Add new position</button>
      </div>
    );
  }
}

class EducationInputs extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          id="year"
          name="year"
          placeholder="Graduation year"
        />
        <input
          type="text"
          id="institution"
          name="institution"
          placeholder="College/University"
        />
        <input
          type="text"
          id="degree"
          name="degree"
          placeholder="Your degree"
        />
        <button onClick={this.props.remove}>Remove</button>
      </div>
    );
  }
}

export default Education;
