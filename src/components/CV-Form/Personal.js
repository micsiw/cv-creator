import React, { Component } from "react";

class Personal extends Component {
  constructor(props) {
    super(props);

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
        <h3 className="form-title personal-title">Personal information</h3>
        <input
          type="text"
          id="first-name"
          placeholder="First name"
          onChange={this.setFirstName}
        />
        <input
          type="text"
          id="last-name"
          placeholder="Last name"
          onChange={this.setLastName}
        />
        <input
          type="text"
          id="job-title"
          placeholder="Job title"
          onChange={this.setJobTitle}
        />
        <input
          type="tel"
          id="phone"
          placeholder="Phone number"
          onChange={this.setPhoneNumber}
        />
        <input
          type="email"
          id="email"
          placeholder="E-mail"
          onChange={this.setEmail}
        />
        <input
          type="text"
          id="address"
          placeholder="Address"
          onChange={this.setAddress}
        />
        <textarea
          maxLength="480"
          id="description"
          placeholder="Description (Max 480 characters)"
          onChange={this.setPersonalDescription}
        />
      </div>
    );
  }
}

export default Personal;
