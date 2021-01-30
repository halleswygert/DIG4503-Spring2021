import axios from 'axios';
import chalk from 'chalk'; 

class Fetch {
    constructor(pokemon, color){
        this.pokemon = pokemon;
        this.color = color; 
    }
fetch () {
    axios('https://pokeapi.co/api/v2/pokemon/'+ this.pokemon)
    .then((response => {
        const pokemon = response.data;
         
        console.log(chalk.hex(this.color)("This is a" + pokemon.name + "the ID is " + pokemon.id));

    }))
    .catch(error => console.log(chalk.red("This is an error: " + error))

)}

}
  
export default Fetch;