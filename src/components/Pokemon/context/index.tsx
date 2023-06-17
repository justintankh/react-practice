import React, { useEffect } from "react";
import { PokemonContextType } from "./types";
import { usePokemonReducer } from "../reducer";
import { PokemonReducerActionType } from "../reducer/types";
import useFetchPokemon from "../hooks/useFetchPokemon";
import useFilterHook from "../hooks/useFilterHook";

export const PokemonContext = React.createContext<PokemonContextType>(
	{} as any
);

export const PokemonContextProvider: React.FC<{
	children: React.ReactNode;
}> = ({ children }) => {
	const [state, dispatch] = usePokemonReducer();
	const { pokemonList } = useFetchPokemon();
	const { filteredPokemon, slice } = useFilterHook();

	useEffect(() => {
		dispatch({
			type: PokemonReducerActionType.SET_POKEMON,
			payload: filteredPokemon(pokemonList, state.search),
		});
	}, [
		/* For state to set on load */
		pokemonList,
		/* For lazy loading to update */
		slice,
		/* For text filtered pokemon to update */
		state.search,
	]);

	const providerValues: PokemonContextType = {
		states: {
			...state,
		},
		methods: {
			setSelected: (selectedId) => {
				dispatch({
					type: PokemonReducerActionType.SET_SELECT,
					payload: selectedId,
				});
			},
			setSearch: (text) => {
				dispatch({
					type: PokemonReducerActionType.SET_SEARCH,
					payload: text,
				});
			},
		},
	};

	return (
		<PokemonContext.Provider value={providerValues}>
			{children}
		</PokemonContext.Provider>
	);
};
