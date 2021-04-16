var newMeme = [];

module.exports = {
  newMemes: (req, res) => {
    res.status(200).send(newMemes);
  },
};
