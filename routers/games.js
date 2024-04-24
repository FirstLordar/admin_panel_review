const { sendAllGames, deleteGame, addGameController } = require("../controllers/games");
const getAllGames = require("../middlewares/game");
const gamesRouter = require("express").Router();

gamesRouter.get("/games",getAllGames, sendAllGames)
gamesRouter.delete("/games/:id", getAllGames, deleteGame);
gamesRouter.post("/games", getAllGames, addGameController)


module.exports = gamesRouter;