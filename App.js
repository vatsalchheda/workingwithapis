import React, { Component } from "react";
import "./App.css";
import PatientSignUp from "./views/PatientSignUp.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PatientSignUp />
      </div>
    );
  }
}

export default App;
