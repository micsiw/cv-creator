import React, { Component } from "react";

class ContactDisplay extends Component {
  render() {
    return (
      <div className="contact">
        <h3 className="title-section">Contact</h3>
        <div className="contact-content">
          <div className="contact-section">
            <p className="contact-title">Phone</p>
            <p>{this.props.phoneNumber}</p>
          </div>
          <div className="contact-section">
            <p className="contact-title">Email</p>
            <p>{this.props.email}</p>
          </div>
          <div className="contact-section">
            <p className="contact-title">Address</p>
            <p>{this.props.address}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactDisplay;
