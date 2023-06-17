import { initialState } from "./const";
import {
	PokemonReducerAction,
	PokemonReducerActionType,
	PokemonReducerState,
} from "./types";

export const pokemonReducer = (
	state: PokemonReducerState = initialState,
	action: PokemonReducerAction
): PokemonReducerState => {
	switch (action.type) {
		case PokemonReducerActionType.SET_POKEMON:
			return {
				...state,
				pokemonList: action.payload,
			};
		case PokemonReducerActionType.SET_FILTERED_POKEMON:
			return {
				...state,
				pokemonListFiltered: action.payload,
			};
		case PokemonReducerActionType.SET_SEARCH:
			return {
				...state,
				search: action.payload,
			};
		case PokemonReducerActionType.SET_SELECT:
			return {
				...state,
				selected: action.payload,
			};
		default:
			return state;
	}
};
