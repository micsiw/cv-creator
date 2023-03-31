import React, { Component } from "react";
import PhotoDisplay from "./Photo-display";
import IntroductionDisplay from "./Introduction-display";
import ContactDisplay from "./Contact-display";
import ExperienceDisplay from "./Experience-display";
import EducationDisplay from "./Education-display";
import SkillsDisplay from "./Skills-display";
import LanguagesDisplay from "./Languages-display";
import "../../styles/Display.css";

class Display extends Component {
  render() {
    return (
      <div className="display-wrapper">
        <div className="display">
          <div className="display-left">
            <PhotoDisplay />
            <ContactDisplay
              phoneNumber={this.props.phoneNumber}
              email={this.props.email}
              address={this.props.address}
            />
            <EducationDisplay education={this.props.education} />
            <SkillsDisplay skills={this.props.skills} />
            <LanguagesDisplay languages={this.props.languages} />
          </div>
          <div className="display-right">
            <IntroductionDisplay
              firstName={this.props.firstName}
              lastName={this.props.lastName}
              jobTitle={this.props.jobTitle}
              personalDescription={this.props.personalDescription}
            />
            <ExperienceDisplay experience={this.props.experience} />
          </div>
        </div>
      </div>
    );
  }
}

export default Display;
