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
	const { filteredPokemon } = useFilterHook();

	useEffect(() => {
		dispatch({
			type: PokemonReducerActionType.SET_POKEMON,
			payload: pokemonList,
		});
	}, [pokemonList]);

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
				dispatch({
					type: PokemonReducerActionType.SET_POKEMON,
					payload: filteredPokemon(pokemonList, text),
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
