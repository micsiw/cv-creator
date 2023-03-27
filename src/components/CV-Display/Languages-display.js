import React, { Component } from "react";

class LanguagesDisplay extends Component {
  render() {
    return (
      <div className="languages">
        <h3>Languages</h3>
        {this.props.languages.map((language) => {
          return (
            <div key={language.id}>
              <div className="language">{language.language}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default LanguagesDisplay;
