let newMemes = [];
let id = 0;
module.exports = {
  newMemes: (req, res) => {
    const { meme, caption } = req.body;

    const userCreated = {
      meme,
      caption,
      id,
    };

    if (newMemes.length <= 3) {
      id++;
      newMemes.push(userCreated);
    }

    res.status(200).send(newMemes);
  },
  changeCaption: (req, res) => {
    const { id, caption } = req.body;
    for (let i = 0; i < newMemes.length; i++) {
      if (id === id) {
        return (caption.req.body = userInput);
      }
    }
  },
};
