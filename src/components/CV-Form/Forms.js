import React, { Component } from "react";
import Education from "./Education";
import Personal from "./Personal";
import Skills from "./Skills";
import Languages from "./Languages";
import Experience from "./Experience";
import "../../styles/Forms.css";

class Forms extends Component {
  render() {
    return (
      <div className="forms">
        <Personal
          onFirstNameChange={this.props.onFirstNameChange}
          onLastNameChange={this.props.onLastNameChange}
          onJobTitleChange={this.props.onJobTitleChange}
          onPhoneNumberChange={this.props.onPhoneNumberChange}
          onEmailChange={this.props.onEmailChange}
          onAddressChange={this.props.onAddressChange}
          onPersonalDescriptionChange={this.props.onPersonalDescriptionChange}
        />
        <Education
          onEducationInputsChange={this.props.onEducationInputsChange}
        />
        <Skills onSkillsInputsChange={this.props.onSkillsInputsChange} />
        <Languages onLanguageInputsChange={this.props.onLanguageInputsChange} />
        <Experience
          onExperienceInputsChange={this.props.onExperienceInputsChange}
        />
      </div>
    );
  }
}

export default Forms;
