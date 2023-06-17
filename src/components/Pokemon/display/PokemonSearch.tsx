import React from "react";
import { PokemonContext } from "../context";

export function PokemonSearch() {
	const {
		methods: { setSearch },
		states: { search },
	} = React.useContext(PokemonContext);

	return (
		<input
			className="searchField"
			type="text"
			value={search}
			onChange={(e) =>
				setSearch(e.currentTarget.value.toLocaleLowerCase())
			}
			placeholder="Enter the pokemon to search"
		/>
	);
}
