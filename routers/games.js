const gamesRouter = require('express').Router()

const { sendAllGames, sendUpdatedGames } = require("../controllers/games");
const { getAllGames, checkIsTitleInArray,
    updateGamesArray, updateGamesFile,
    findGameById, deleteGame } = require("../middlewares/game");
const findAllGames = require('../middlewares/games');

gamesRouter.get("/games", findAllGames, sendAllGames);

gamesRouter.post(
    "/games",
    getAllGames,
    checkIsTitleInArray,
    updateGamesArray,
    updateGamesFile,
    sendUpdatedGames
);

gamesRouter.delete(
    "/games/:id",
    getAllGames,
    findGameById,
    deleteGame,
    updateGamesFile,
    sendUpdatedGames
);

module.exports = gamesRouter;