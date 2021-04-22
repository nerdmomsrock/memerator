import React, { Component } from "react";
import axios from "axios";
import "./index.css";
import NewMeme from "./Components/NewMeme";

import Header from "./Components/Header";
const getRandomNumber = (length) => Math.floor(Math.random() * length);
const getRandomCaption = (length) => Math.floor(Math.random() * length);

class App extends Component {
  constructor() {
    super();
    this.state = {
      captions: [],
      memes: [],
      meme: "",
      caption: "",
      newMemes: [],
    };
  }

  componentDidMount() {
    axios
      .get("/api/captions")
      .then((response) => {
        console.log(response.data);
        this.setState({ captions: response.data });
        this.setRandomCaption();
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get("/api/memes")
      .then((response) => {
        console.log(response.data);
        this.setState({ memes: response.data });
        this.setRandomMeme();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  setRandomMeme = () => {
    const index = getRandomNumber(this.state.memes.length);

    this.setState({ meme: this.state.memes[index] });
  };

  setRandomCaption = () => {
    const sentence = getRandomCaption(this.state.captions.length);
    this.setState({ caption: this.state.captions[sentence] });
  };
  saveMeme = () => {
    axios
      .post("/api/newMemes", {
        meme: this.state.meme,
        caption: this.state.caption,
      })
      .then((response) => {
        console.log(response.data);
        this.setState({ newMemes: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // res.status(200).send(filteredNewMemes);
  deleteMeme = (id) => {
    axios
      .delete("/api/newMemes/" + id)
      .then((response) => {
        this.setState({ newMemes: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  updateNewMemes = (newMemes) => {
    this.setState({ newMemes });
  };

  render() {
    return (
      <main>
        <Header header="Memerator 2000" />
        <div className="container">
          <aside className="leftSide">
            {this.state.newMemes.map((meme) => {
              return (
                <div className="newMeme">
                  <img
                    className="rightPics"
                    height="200px"
                    src={meme.meme}
                    alt="saved-meme"
                  ></img>
                  <h3>{meme.caption}</h3>
                  <button
                    className="delete"
                    onClick={() => this.deleteMeme(meme.id)}
                  >
                    Delete
                  </button>
                  <NewMeme id={meme.id} updateNewMemes={this.updateNewMemes} />
                </div>
              );
            })}
          </aside>

          <section className="middle">
            <img className="pics" src={this.state.meme} alt="meme-pic" />

            <h2>{this.state.caption}</h2>
          </section>
          <aside className="rightSide">
            <button className="rightButton" onClick={this.setRandomMeme}>
              Get New Image
            </button>
            <button className="rightButton" onClick={this.saveMeme}>
              SAVE
            </button>

            <button className="rightButton" onClick={this.setRandomCaption}>
              Get New Caption
            </button>
          </aside>
        </div>
      </main>
    );
  }
}

export default App;
