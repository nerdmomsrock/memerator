const captions = [];

module.exports = {
  getCaptions: (req, res) => {
    res.status(200).send(captions);
  },
};
