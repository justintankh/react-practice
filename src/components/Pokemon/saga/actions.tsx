import { PokemonReducerActionType } from "../store/types";
import { Pokemon } from "../types";
import { put } from "redux-saga/effects";

export function* fetchPokemonAction() {
	const pokemonList: Pokemon[] = yield fetch(
		"./src/assets/pokemon.json"
	).then((res) => res.json());

	yield put({
		type: PokemonReducerActionType.SET_POKEMON,
		payload: pokemonList,
	});
}
