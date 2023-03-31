import React, { Component } from "react";

class Languages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: [],
      languages: [],
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
  }

  handleAdd() {
    this.setState({
      inputs: this.state.inputs.concat(
        <LanguagesInputs
          key={this.state.inputs.length}
          id={this.state.inputs.length}
          remove={this.handleRemove.bind(this, this.state.inputs.length)}
          handleLanguageChange={this.handleLanguageChange}
        />
      ),
      languages: this.state.languages.concat({
        id: this.state.languages.length,
        language: "",
      }),
    });
  }

  handleRemove(id) {
    const updatedInputs = this.state.inputs.filter(
      (input) => input.key !== id.toString()
    );
    const updatedLanguageInputs = this.state.languages.filter(
      (input) => input.id !== id
    );

    this.setState({
      inputs: updatedInputs,
      languages: updatedLanguageInputs,
    });
    this.props.onLanguageInputsChange(updatedLanguageInputs);
  }

  handleLanguageChange(id, languageInput) {
    const updatedLanguageInputs = this.state.languages.map((record) => {
      if (record.id === id) {
        return { ...record, language: languageInput };
      } else {
        return record;
      }
    });
    this.setState({ languages: updatedLanguageInputs });
    this.props.onLanguageInputsChange(updatedLanguageInputs);
  }

  render() {
    return (
      <div className="languages-info">
        <h3 className="form-title language-title">Languages</h3>
        {this.state.inputs}
        <button className="add-button" onClick={this.handleAdd}>
          Add new language
        </button>
      </div>
    );
  }
}

class LanguagesInputs extends Component {
  constructor(props) {
    super(props);

    this.id = this.props.id;
    this.setLanguage = this.setLanguage.bind(this);
  }

  setLanguage(e) {
    this.props.handleLanguageChange(this.id, e.target.value);
  }

  render() {
    return (
      <div className="language-inputs">
        <input
          type="text"
          id="language"
          placeholder="Language"
          onChange={this.setLanguage}
        />
        <button className="remove-button" onClick={this.props.remove}>
          &#10006;
        </button>
      </div>
    );
  }
}

export default Languages;
