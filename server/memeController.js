const memes = [];

module.exports = {
  getMemes: (req, res) => {
    res.status(200).send(memes);
  },
};
