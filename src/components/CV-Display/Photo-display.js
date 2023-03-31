import React, { Component } from "react";
import placeholder from "../.././images/placeholder_avatar.png";

class PhotoDisplay extends Component {
  render() {
    return (
      <div className="photo">
        {/* <div className="photo-holder"> */}
        {/* <img src={placeholder} alt="placeholder"></img> */}
        <div
          className="avatar"
          style={{
            backgroundImage: `url(${placeholder})`,
          }}
        ></div>
        {/* </div> */}
      </div>
    );
  }
}

export default PhotoDisplay;
