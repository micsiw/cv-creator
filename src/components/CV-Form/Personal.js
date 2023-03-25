import React, { Component } from "react";

class Personal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
    };

    this.setFirstName = this.setFirstName.bind(this);
    this.setLastName = this.setLastName.bind(this);
    this.setJobTitle = this.setJobTitle.bind(this);
    this.setPhoneNumber = this.setPhoneNumber.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setAddress = this.setAddress.bind(this);
    this.setPersonalDescription = this.setPersonalDescription.bind(this);
  }

  setFirstName(e) {
    this.props.onFirstNameChange(e.target.value);
  }

  setLastName(e) {
    this.props.onLastNameChange(e.target.value);
  }

  setJobTitle(e) {
    this.props.onJobTitleChange(e.target.value);
  }

  setPhoneNumber(e) {
    this.props.onPhoneNumberChange(e.target.value);
  }

  setEmail(e) {
    this.props.onEmailChange(e.target.value);
  }

  setAddress(e) {
    this.props.onAddressChange(e.target.value);
  }

  setPersonalDescription(e) {
    this.props.onPersonalDescriptionChange(e.target.value);
  }

  render() {
    return (
      <div className="personal-info">
        <h3>Personal information</h3>
        <input
          type="text"
          id="first-name"
          placeholder="First name"
          value={this.props.firstName}
          onChange={this.setFirstName}
        />
        <input
          type="text"
          id="last-name"
          placeholder="Last name"
          value={this.props.lastName}
          onChange={this.setLastName}
        />
        <input
          type="text"
          id="job-title"
          placeholder="Job title"
          value={this.props.jobTitle}
          onChange={this.setJobTitle}
        />
        <input
          type="text"
          id="phone"
          placeholder="Phone number"
          value={this.props.phoneNumber}
          onChange={this.setPhoneNumber}
        />
        <input
          type="email"
          id="email"
          placeholder="E-mail"
          value={this.props.email}
          onChange={this.setEmail}
        />
        <input
          type="text"
          id="address"
          placeholder="Address"
          value={this.props.address}
          onChange={this.setAddress}
        />
        <input
          type="text"
          id="description"
          placeholder="Description"
          value={this.props.personalDescription}
          onChange={this.setPersonalDescription}
        />
      </div>
    );
  }
}

export default Personal;
