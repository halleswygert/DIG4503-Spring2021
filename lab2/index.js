import Fetch from "./Fetch.js";

const validPokemon = new Fetch("170", "#b8f900");
validPokemon.fetch();

const invalidPokemon = new Fetch ('-200',"#b8f900");
invalidPokemon.fetch(); 