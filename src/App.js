import React, { Component } from "react";
import axios from "axios";
import "./index.css";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    axios.get("/api/memes").then().catch();
  }

  componentDidMount() {
    axios
      .get("/api/captions")
      .then((response) => {
        console.log(response);
      })
      .catch();
    axios
      .get("/api/memes")
      .then((response) => {
        console.log(response);
      })
      .catch();
  }
  render() {
    return (
      <div>
        <h1>App</h1>
      </div>
    );
  }
}

export default App;
