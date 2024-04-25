const games = require("../models/game");

const findAllGames = async (req, res, next) => {
  const result = await games.find({});
  console.log(result);
  next();
};

module.exports = findAllGames;