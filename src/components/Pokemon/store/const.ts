import { PokemonReducerState } from "./types";

export const initialState: PokemonReducerState = {
	pokemonList: [],
	pokemonListFiltered: [],
	search: "",
	selected: -1,
};
