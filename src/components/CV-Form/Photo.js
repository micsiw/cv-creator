import { Component } from "react";

class Photo extends Component {
  constructor(props) {
    super(props);

    this.handlePhotoChange = this.handlePhotoChange.bind(this);
  }

  handlePhotoChange(event) {
    const fileUrl = URL.createObjectURL(event.target.files[0]);
    this.props.onPhotoChange(fileUrl);
  }

  render() {
    return (
      <div className="photo-input">
        <label htmlFor="photo-upload" className="photo-upload-button">
          <input
            type="file"
            accept="image/*"
            id="photo-upload"
            onChange={this.handlePhotoChange}
          />
          Upload your photo
        </label>
      </div>
    );
  }
}

export default Photo;
