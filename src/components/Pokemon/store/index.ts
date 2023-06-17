import { pokemonRootSaga, pokemonSagaMiddleware } from "../saga";
import { initialState } from "./const";
import { PokemonReducerAction, PokemonReducerState } from "./types";
import { configureStore } from "@reduxjs/toolkit";
import { pokemonReducer } from "./reducer";

export const usePokemonStore = () => {
	/* create store */
	const reduxStore = configureStore<
		PokemonReducerState,
		PokemonReducerAction
	>({
		reducer: pokemonReducer,
		preloadedState: initialState,
		middleware: [pokemonSagaMiddleware],
	});
	/* enable listener */
	pokemonSagaMiddleware.run(pokemonRootSaga);
	return reduxStore;
};
