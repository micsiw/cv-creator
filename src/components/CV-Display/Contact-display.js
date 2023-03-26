import React, { Component } from "react";

class ContactDisplay extends Component {
  render() {
    return (
      <div className="contact">
        <h3>Contact</h3>
        <div className="contact-section">
          <p>PHONE</p>
          <p>{this.props.phoneNumber}</p>
        </div>
        <div className="contact-section">
          <p>EMAIL</p>
          <p>{this.props.email}</p>
        </div>
        <div className="contact-section">
          <p>ADDRESS</p>
          <p>{this.props.address}</p>
        </div>
      </div>
    );
  }
}

export default ContactDisplay;
