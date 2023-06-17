import { Provider, useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import useFetchPokemon from "../hooks/useFetchPokemon.ts";
import useFilterHook from "../hooks/useFilterHook.ts";
import {
	PokemonReducerState,
	PokemonReducerActionType,
} from "../reducer/types.ts";
import { usePokemonStore } from "../reducer/index.ts";

const PokemonStoreService: React.FC<{
	children: React.ReactNode;
}> = ({ children }) => {
	const dispatch = useDispatch();
	const search = useSelector<
		PokemonReducerState,
		PokemonReducerState["search"]
	>((state) => state.search);

	const { pokemonList } = useFetchPokemon();
	const { filteredPokemon, slice } = useFilterHook();

	useEffect(() => {
		dispatch({
			type: PokemonReducerActionType.SET_POKEMON,
			payload: filteredPokemon(pokemonList, search),
		});
	}, [
		/* For state to set on load */
		pokemonList,
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
