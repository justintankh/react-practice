import { Provider, useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
	PokemonReducerState,
	PokemonReducerActionType,
} from "../store/types.ts";
import { usePokemonStore } from "../store/index.ts";
import useFilterHook from "../hooks/useFilterHook.ts";
import useFetchPokemon from "../hooks/useFetchPokemon.ts";

const PokemonStoreService: React.FC<{
	children: React.ReactNode;
}> = ({ children }) => {
	const dispatch = useDispatch();
	const {} = useFetchPokemon();
	const { filteredPokemon, slice } = useFilterHook();

	const search = useSelector<
		PokemonReducerState,
		PokemonReducerState["search"]
	>((state) => state.search);

	const pokemonList = useSelector<
		PokemonReducerState,
		PokemonReducerState["pokemonList"]
	>((state) => state.pokemonList);

	useEffect(() => {
		dispatch({
			type: PokemonReducerActionType.SET_FILTERED_POKEMON,
			payload: filteredPokemon(pokemonList, search),
		});
	}, [
		/* To filter when pokemonList mounted */
		pokemonList.length !== 0,
		/* For lazy loading to update */
		slice,
		/* For text filtered pokemon to update */
		search,
	]);

	return <>{children}</>;
};

export default ({ children }: { children: React.ReactNode }) => (
	<Provider store={usePokemonStore()}>
		<PokemonStoreService>{children}</PokemonStoreService>
	</Provider>
);
