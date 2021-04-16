var input = "";

module.exports = {
  getInput: (req, res) => {
    res.status(200).send(input);
  },
};
