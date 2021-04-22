import axios from "axios";

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
        id: this.props.id,
        caption: this.state.captionInput,
      })
      .then((response) => {
        console.log(response.data);

        this.props.updateNewMemes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  changeHandler = (e) => {
    this.setState({ captionInput: e.target.value });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Enter Your Own Caption"
          onChange={this.changeHandler}
        />
        <button className="saveButton" onClick={this.saveCaption}>
          Change Caption
        </button>
      </div>
    );
  }
}

export default NewMeme;
