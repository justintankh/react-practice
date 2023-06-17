import { Pokemon } from "../types";

export type PokemonReducerState = {
	pokemonList: Pokemon[];
	search: string;
	selected: number;
};

export enum PokemonReducerActionType {
	SET_POKEMON = "SET_POKEMON",
	SET_SEARCH = "SET_SEARCH",
	SET_SELECT = "SET_SELECT",
}

type SetPokemonActionType = {
	type: PokemonReducerActionType.SET_POKEMON;
	payload: Pokemon[];
};

type SetSearchActionType = {
	type: PokemonReducerActionType.SET_SEARCH;
	payload: string;
};

type SetSelectActionType = {
	type: PokemonReducerActionType.SET_SELECT;
	payload: number;
};

export type PokemonReducerAction =
	| SetPokemonActionType
	| SetSearchActionType
	| SetSelectActionType;
