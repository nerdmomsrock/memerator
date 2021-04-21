import axios from "axios";
import React, { Component } from "react";

class NewMeme extends Component {
  constructor() {
    super();
    this.state = {
      newMeme: [], //does this need to be functional without state?
    };
  }

  componentDidUpdate() {
    const newMeme = axios.post("/api/newMeme", {});
  }
  render() {
    return <div></div>;
  }
}

export default NewMeme;
