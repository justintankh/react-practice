import { takeEvery } from "redux-saga/effects";
import createSagaMiddleware from "@redux-saga/core";
import { PokemonSagaActionType } from "./types";
import { fetchPokemonAction } from "./actions";
/* listener */
export function* pokemonRootSaga() {
	yield takeEvery(
		PokemonSagaActionType.FETCH_POKEMON,
		fetchPokemonAction
	);
}
/* middleware */
export const pokemonSagaMiddleware = createSagaMiddleware();
