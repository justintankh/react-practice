import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { PokemonSagaActionType } from "../saga/types";

const useFetchPokemon = () => {
	const dispatch = useDispatch();

	useEffect(
		() => {
			dispatch({ type: PokemonSagaActionType.FETCH_POKEMON });
		},
		/* to run only once on mount to set state */
		[]
	);

	return {};
};

export default useFetchPokemon;
