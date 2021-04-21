var newMeme = [];

module.exports = {
  newMemes: (req, res) => {
    //make req.body to push to newMeme array
    res.status(200).send(newMemes);
    const generated = ({ meme, caption } = req.body);

    const userCreated = {
      meme,
      caption,
      id,
    };
    id++;

    newMeme.push(userCreated);

    res.status(200).send(newMeme);
  },
};
