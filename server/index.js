const express = require("express");
const { getMemes } = require("./memeController");
const { getCaptions } = require("./captionController");

const app = express();

const PORT = 5050;

app.use(express.json());

app.get("/api/memes", getMemes);

app.get("/api/captions", getCaptions);

app.listen(PORT, () => console.log(`Rockin' it out on Port ${PORT}`));
