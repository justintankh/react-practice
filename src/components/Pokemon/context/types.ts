import { PokemonReducerState } from "../reducer/types";

export type PokemonContextType = {
	states: PokemonReducerState;
	methods: {
		setSelected: (e: number) => void;
		setSearch: (e: string) => void;
	};
};
