import React, { Component } from "react";

class PhotoDisplay extends Component {
  render() {
    return (
      <div className="photo">
        <div
          className="avatar"
          style={{
            backgroundImage: `url("${this.props.photo}")`,
          }}
        ></div>
      </div>
    );
  }
}

export default PhotoDisplay;
