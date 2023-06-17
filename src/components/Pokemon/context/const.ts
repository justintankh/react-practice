import { PokemonContextType } from "./types";

export const initialState: PokemonContextType = {
	states: {
		pokemonList: [],
		search: "",
		selected: -1,
	},
	methods: {
		setSelected: () => {},
		setSearch: () => {},
	},
};
