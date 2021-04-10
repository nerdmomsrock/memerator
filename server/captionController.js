const captions = [
  "Some people just need a sympathetic pat....on the head....with a hammer.",
  "I have neither the time nor the crayons to explain this to you.",
  "Of course I talk to myself. Sometimes I need expert advice.",
  "The chains on my mood swing just snapped. Run.",
  "There is a pretty good chance I'll end up being one of those senior citizens who randomly bites people",
  "That sounds like a terrible idea! What time??",
  "Patience: What you have when there are too many witnesses",
  "Adulthood is like looking both ways before you cross the street and then getting hit by an airplane.",
  "I love you will all my butt. I would say heart, but my butt is bigger.",
  "Me: This show is boring. Boss: Again, this is a Zoom conference.",
  "Some girls are Malibu Barbie. I'm Wednesday Addams",
  "Coffee, you're on the bench. Alcohol, suit up!",
  "A good friend will help you up when you fall down. A best friend will laugh at you so hard they fall down too.",
  "The more you weigh, the harder you are to kidnap. Stay Safe. Eat Cake.",
];

module.exports = {
  getCaptions: (req, res) => {
    res.status(200).send(captions);
  },
};
