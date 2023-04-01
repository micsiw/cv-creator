import React, { Component } from "react";
import Education from "./Education";
import Personal from "./Personal";
import Skills from "./Skills";
import Languages from "./Languages";
import Experience from "./Experience";
import Photo from "./Photo";
import ReactToPrint from "react-to-print";
import "../../styles/Forms.css";

class Forms extends Component {
  render() {
    return (
      <div className="forms">
        <Photo onPhotoChange={this.props.onPhotoChange} />
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
        <div className="additional-input">
          <ReactToPrint
            trigger={() => (
              <button className="add-button print-button">
                Export / Print
              </button>
            )}
            content={() => this.props.contentRef.current}
          />
          <button className="add-button" onClick={this.props.onExample}>
            Load example
          </button>
          <button className="add-button" onClick={this.props.onReset}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Forms;
