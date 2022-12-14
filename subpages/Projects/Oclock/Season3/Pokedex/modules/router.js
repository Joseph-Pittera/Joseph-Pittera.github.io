const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.get("/", controller.home);
router.get("/details/:name", controller.pokemonDetails);
router.get("/types/", controller.pokemonTypes);
router.get("/types/:type", controller.typeFilteredPokemons);

router.post("/", controller.nameFilteredPokemons);

module.exports = router;
