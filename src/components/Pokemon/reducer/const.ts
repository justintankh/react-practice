import { PokemonReducerState } from "./types";

export const initialState: PokemonReducerState = {
	pokemonList: [],
	search: "",
	selected: -1,
};
