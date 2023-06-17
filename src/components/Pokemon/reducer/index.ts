import React from "react";
import { initialState } from "./const";
import {
	PokemonReducerAction,
	PokemonReducerActionType,
	PokemonReducerState,
} from "./types";

const pokemonReducer = (
	state: PokemonReducerState,
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
			throw new Error(
				`no action implemented: ${action["type"]}`
			);
	}
};

export const usePokemonReducer = () =>
	React.useReducer(pokemonReducer, initialState);
