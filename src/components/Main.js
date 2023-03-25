import React, { Component } from "react";
import Forms from "./CV-Form/Forms";
import Display from "./CV-Display/Display";
import "../styles/Main.css";

class Main extends Component {
  constructor(props) {
    super(props);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleJobTitleChange = this.handleJobTitleChange.bind(this);
    this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handlePersonalDescriptionChange =
      this.handlePersonalDescriptionChange.bind(this);

    this.state = {
      firstName: "",
      lastName: "",
      jobTitle: "",
      phoneNumber: "",
      email: "",
      address: "",
      personalDescription: "",
    };
  }

  handleFirstNameChange(fName) {
    this.setState({ firstName: fName });
  }

  handleLastNameChange(lName) {
    this.setState({ lastName: lName });
  }

  handleJobTitleChange(job) {
    this.setState({ jobTitle: job });
  }

  handlePhoneNumberChange(number) {
    this.setState({ phoneNumber: number });
  }

  handleEmailChange(mail) {
    this.setState({ email: mail });
  }

  handleAddressChange(addr) {
    this.setState({ address: addr });
  }

  handlePersonalDescriptionChange(pDescr) {
    this.setState({ personalDescription: pDescr });
  }

  render() {
    return (
      <div className="main">
        <Forms
          onFirstNameChange={this.handleFirstNameChange}
          onLastNameChange={this.handleLastNameChange}
          onJobTitleChange={this.handleJobTitleChange}
          onPhoneNumberChange={this.handlePhoneNumberChange}
          onEmailChange={this.handleEmailChange}
          onAddressChange={this.handleAddressChange}
          onPersonalDescriptionChange={this.handlePersonalDescriptionChange}
        />
        <Display
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          jobTitle={this.state.jobTitle}
          phoneNumber={this.state.phoneNumber}
          email={this.state.email}
          address={this.state.address}
          personalDescription={this.state.personalDescription}
        />
      </div>
    );
  }
}

export default Main;
