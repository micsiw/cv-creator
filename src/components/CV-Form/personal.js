import React, { Component } from "react";

class Personal extends Component {
  render() {
    return (
      <div className="personal-info">
        <h3>Personal information</h3>
        <input
          type="text"
          id="first-name"
          name="first-name"
          placeholder="First name"
        />
        <input
          type="text"
          id="last-name"
          name="last-name"
          placeholder="Last name"
        />
        <input
          type="text"
          id="job-title"
          name="job-title"
          placeholder="Job title"
        />
        <input type="text" id="phone" name="phone" placeholder="Phone number" />
        <input type="email" id="email" name="email" placeholder="E-mail" />
        <input type="text" id="address" name="address" placeholder="Address" />
        <input
          type="text"
          id="description"
          name="description"
          placeholder="Description"
        />
      </div>
    );
  }
}

export default Personal;
