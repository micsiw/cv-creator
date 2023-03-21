import React, { Component } from "react";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import "./styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
