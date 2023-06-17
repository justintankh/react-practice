import { initialState } from "./const";
import {
	PokemonReducerAction,
	PokemonReducerActionType,
	PokemonReducerState,
} from "./types";
import { configureStore } from "@reduxjs/toolkit";

const pokemonReducer = (
	state: PokemonReducerState = initialState,
	action: PokemonReducerAction
): PokemonReducerState => {
	switch (action.type) {
		case PokemonReducerActionType.SET_POKEMON:
			return {
				...state,
				pokemonList: action.payload,
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

export const usePokemonStore = () =>
	configureStore<PokemonReducerState, PokemonReducerAction>({
		reducer: pokemonReducer,
		preloadedState: initialState,
	});
