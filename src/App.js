import React, { Component } from "react";
import axios from "axios";
import "./index.css";
import "./Components/NewMeme";
import "./Components/UserInput";

class App extends Component {
  constructor() {
    super();
    this.state = {
      captions: [],
      memes: [],
    };
  }

  componentDidMount() {
    axios
      .get("/api/captions")
      .then((response) => {
        console.log(response.data);
        this.setState({ captions: response.data });
      })
      .catch();
    axios
      .get("/api/memes")
      .then((response) => {
        console.log(response.data);
        this.setState({ memes: response.data });
      })
      .catch();
  }
  render() {
    return (
      <div>
        {this.state.captions.map((caption) => {
          return (
            <div>
              <h2>{caption}</h2>
            </div>
          );
        })}
        {this.state.memes.map((meme) => {
          return (
            <div>
              <img src={meme} alt="meme-pic" />
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
