export interface PokemonStatType {
    name: string;
    value: number;
    fullMark: number;
}

export interface Pokemon {
  name: string;
  id: number;
  height: number;
  weight: number;
  picture: string;
  stats: PokemonStatType[];
  type: string[];
  ability: string;
  versions: number;
}

export interface PokemonsState {
  pokemons_list: Pokemon[],
  next: undefined | string,
  status: 'idle' | 'loading' | 'failed';
  modalOpened: boolean;  
  selectedPokemon: number;
}