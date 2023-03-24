import React, { Component } from "react";

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: [
        <ExperienceInputs key={0} remove={this.handleRemove.bind(this, 0)} />,
      ],
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleAdd() {
    this.setState({
      inputs: this.state.inputs.concat(
        <ExperienceInputs
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
      <div className="experience-info">
        <h3>Experience</h3>
        {this.state.inputs}
        <button onClick={this.handleAdd}>Add new position</button>
      </div>
    );
  }
}

class ExperienceInputs extends Component {
  render() {
    return (
      <div>
        <input type="text" id="time-frames" placeholder="Time frames" />
        <input type="text" id="company-name" placeholder="Company name" />
        <input type="text" id="position" placeholder="Position name" />
        <input type="text" id="job-description" placeholder="Description" />
        <button onClick={this.props.remove}>Remove</button>
      </div>
    );
  }
}

export default Experience;
