import {Pokemon, PokemonStatType} from '../models'

interface PokemonApiListItem {
  name: string,
  url: "string",
}

// TODO: Remove any and replace with appropriate interface
const mapApiStatsToStatType = (statApi:any) => {
  const statsMapped:PokemonStatType = {
    name: statApi.stat.name,
    value: statApi.base_stat,
    fullMark: 255
  }
  return statsMapped;
}

// TODO: Remove any and replace with appropriate interface
const mapApiDataToPokemon = (pokemonFromApi:any) => {
  const toReturn:Pokemon = {
    name: pokemonFromApi.name,
    id: pokemonFromApi.id,
    height: pokemonFromApi.height,
    weight: pokemonFromApi.weight,
    picture: pokemonFromApi.sprites.other['official-artwork'].front_default,
    stats: pokemonFromApi.stats.map(mapApiStatsToStatType),
    type: pokemonFromApi.types.map((type:any) => type.type.name),
    ability: pokemonFromApi.abilities[0].ability.name,
    versions: pokemonFromApi.game_indices.length,
  };
  return toReturn;
}

export const fetchPokemons = async (next:string | undefined) => {
    let url = next;
    if (url === undefined) {
      url = "https://pokeapi.co/api/v2/pokemon/"
    }
      const res = await fetch(url);
      const data = await res.json();
      url = data.next;
      const promises = data.results.map((pokemonEntry:PokemonApiListItem) => fetch(pokemonEntry.url).then((res) => res.json()));
      const pokemonsResults = await Promise.all(promises);
      return {results: pokemonsResults.map(mapApiDataToPokemon), next: url};
};