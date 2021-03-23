"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Pokemon {
    constructor(id, name, image, type, stats) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.type = type;
        this.stats = stats;
    }
}
class RenderPokemon {
    constructor(amountOfPokemons = 100) {
        this.getPokemon = (id) => __awaiter(this, void 0, void 0, function* () {
            const data = yield fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const pokemon = yield data.json();
            const pokemonType = pokemon.types
                .map((poke) => poke.type.name)
                .join(", ");
            this.renderPokemon(new Pokemon(pokemon.id, pokemon.name, `${pokemon.sprites.front_default}`, pokemonType, pokemon.stats));
        });
        this.createAbilityList = (pokemonStats) => {
            const statsLength = 3;
            let powerOutputs = "";
            for (let i = 0; i < statsLength; i++) {
                const abilityPower = pokemonStats[i].base_stat;
                const abilityName = pokemonStats[i].stat.name;
                powerOutputs += `<li class="list-group-item">
      <div class="d-flex justify-content-between">
        <p class="m-0">${abilityName}</p>
        <p class="m-0">${abilityPower}</p>
      </div>
    </li>`;
            }
            return powerOutputs;
        };
        this.renderPokemon = (pokemon) => {
            const container = document.getElementById("app");
            const ablityListDOM = this.createAbilityList(pokemon.stats);
            let output = `
    <div class="card card__pokemon m-2">
      <h4 class="card-title mt-2"><span class="pokemon__id pe-2">#${pokemon.id}</span>${pokemon.name}</h4>
      <img src=${pokemon.image} class="pokemon__img card-img-top" alt=${pokemon.name}>
      <div class="card-body">
        <ul class="list-group mt-2">
          ${ablityListDOM}
        </ul>
        <p class="card-text resistance-box my-3 p-1">Resistance ${pokemon.type}</p>
      </div>
    </div>
`;
            container.innerHTML += output;
        };
        this.amountOfPokemons = amountOfPokemons;
        this.getAllPokemon();
    }
    getAllPokemon() {
        for (let i = 1; i <= this.amountOfPokemons; i++) {
            this.getPokemon(i);
        }
    }
}
new RenderPokemon(10);
