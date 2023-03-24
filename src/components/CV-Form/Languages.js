import React, { Component } from "react";

class Languages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: [
        <LanguagesInputs key={0} remove={this.handleRemove.bind(this, 0)} />,
      ],
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleAdd() {
    this.setState({
      inputs: this.state.inputs.concat(
        <LanguagesInputs
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
      <div className="languages-info">
        <h3>Languages</h3>
        {this.state.inputs}
        <button onClick={this.handleAdd}>Add new language</button>
      </div>
    );
  }
}

class LanguagesInputs extends Component {
  render() {
    return (
      <div>
        <input type="text" id="language" placeholder="Language" />
        <button onClick={this.props.remove}>Remove</button>
      </div>
    );
  }
}

export default Languages;
