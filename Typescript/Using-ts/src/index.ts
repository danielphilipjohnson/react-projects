class Pokemon {
  id: number;
  name: string;
  image: string;
  type: string;
  stats: any;
  constructor(id: number, name: string, image: string, type: string, stats: any) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.type = type;
    this.stats = stats;
  }
}


class FetchPokemon {

  amountOfPokemons: number;

  constructor(amountOfPokemons: number = 100) {
    this.amountOfPokemons = amountOfPokemons
  }

  private getPokemon = async (id: number): Promise<void> => {
    const data: Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const pokemon: any = await data.json();
    console.log(pokemon)
    // add stats
    const pokemonType: string = pokemon.types
      .map((poke: any) => poke.type.name)
      .join(", ")


    this.renderPokemon(new Pokemon(pokemon.id, pokemon.name, `${pokemon.sprites.front_default}`, pokemonType, pokemon.stats));
  }

  public get(): void {
    for (let i = 1; i <= this.amountOfPokemons; i++) {
      this.getPokemon(i)
    }
  }

  private renderPokemon = (pokemon: Pokemon): void => {
    const container: HTMLElement | any = document.getElementById("app");

    const statsLength: number = 3

    let powerOutputs: string = ""
    for (let i = 0; i < statsLength; i++) {
      const abilityPower = pokemon.stats[i].base_stat;
      const abilityName = pokemon.stats[i].stat.name;
      powerOutputs += `<li class="list-group-item">
      <div class="d-flex justify-content-between">
        <p class="m-0">${abilityName}</p>
        <p class="m-0">${abilityPower}</p>
      </div>
    </li>`
    }

    // for loop the stats
    let output: string = `
    <div class="card card__pokemon m-2">
    <h3 class="card-title mt-2"><span class="pokemon__id pe-2">#${pokemon.id}</span>${pokemon.name}</h3>
    <img src=${pokemon.image} class="pokemon__img card-img-top" alt=${pokemon.name}>
    <div class="card-body">
    
      
     
    <ul class="list-group mt-2">
      ${powerOutputs}
    </ul>
    <p class="card-text resistance-box my-3 p-1">Resistance ${pokemon.type}</p>
    </div>
  </div>
   
`
    container.innerHTML += output
  }
}

new FetchPokemon(100).get();