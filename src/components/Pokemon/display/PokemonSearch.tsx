import { useDispatch, useSelector } from "react-redux";
import {
	PokemonReducerAction,
	PokemonReducerActionType,
	PokemonReducerState,
} from "../store/types";
import { Dispatch } from "@reduxjs/toolkit";

export function PokemonSearch() {
	const dispatch = useDispatch<Dispatch<PokemonReducerAction>>();
	const search = useSelector<
		PokemonReducerState,
		PokemonReducerState["search"]
	>((state) => state.search);

	return (
		<input
			className="searchField"
			type="text"
			value={search}
			onChange={(e) =>
				dispatch({
					type: PokemonReducerActionType.SET_SEARCH,
					payload:
						e.currentTarget.value.toLocaleLowerCase(),
				})
			}
			placeholder="Enter the pokemon to search"
		/>
	);
}
