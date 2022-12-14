const pokemons = require("../data/pokedex.json");
const pokemonTypes = require("../data/pokemonTypes.json");
const stats = require("../data/stats.json");

const controller = {
  /**
   * request to the homepage
   */
  home: (req, res) => {
    const displayedPokemons = pokemons;
    res.render("home", { displayedPokemons });
  },

  /**
   * request to get the characteristics of one pokemon
   */
  pokemonDetails: (req, res) => {
    const pokemonName = req.params.name;
    const pokemon = pokemons.find((pokemon) => pokemon.nom === pokemonName);
    res.render("details", { pokemon, pokemonTypes, stats });
  },

  /**
   * request to the page with all the types of pokemons
   */
  pokemonTypes: (req, res) => {
    res.render("types", { pokemonTypes });
  },

  /**
   * request to filter all pokemons depending on their type
   */
  typeFilteredPokemons: (req, res) => {
    const type = req.params.type;
    const displayedPokemons = pokemons.filter((pokemon) =>
      pokemon.type.includes(type)
    );
    res.render("home-filtered", { displayedPokemons });
  },

  /**
   * request to find one or several pokemons depending on their name
   */
  nameFilteredPokemons: (req, res) => {
    const displayedPokemons = pokemons.filter((pokemon) =>
      pokemon.nom.includes(req.body.pokemonSearch)
    );
    res.render("home-filtered", { displayedPokemons });
  },
};

module.exports = controller;
