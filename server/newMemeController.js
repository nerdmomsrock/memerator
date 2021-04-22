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

    if (newMemes.length < 3) {
      id++;
      newMemes.push(userCreated);
    }

    res.status(200).send(newMemes);
  },
  changeCaption: (req, res) => {
    const { id, caption } = req.body;

    newMemes.forEach((val, i) => {
      if (+id == val.id) {
        newMemes[i].caption = caption;
      }
    });
    res.status(200).send(newMemes);
  },

  deleteMeme: (req, res) => {
    const { id } = req.params;

    //id will be the index of the newMemes array that we will delete
    const filteredNewMemes = newMemes.filter((val) => val.id !== +id);

    newMemes = filteredNewMemes;
    res.status(200).send(filteredNewMemes);
  },
};
