import axios from "axios";
import UserInput from "./UserInput";
import React, { Component } from "react";

class NewMeme extends Component {
  constructor() {
    super();
    this.state = {
      captionInput: "",
    };
  }
  saveCaption = () => {
    axios
      .put("/api/newMemes", {
        captionInput: this.state.captionInput,
      })
      .then((response) => {
        console.log(response.data);
        this.setState({ captionInput: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <UserInput />
        <button className="saveButton" onClick={this.saveCaption}>
          Change Caption
        </button>
      </div>
    );
  }
}

export default NewMeme;
