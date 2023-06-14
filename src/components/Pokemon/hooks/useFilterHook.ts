import { useState } from "react";
import { Pokemon } from "../types";
import { PokemonContext } from "../context";
import React from "react";

const useFilterHook = () => {
	const [slice, setSlice] = useState<number>(20);

	const { searchTerm } = React.useContext(PokemonContext).states;

	window.onscroll = function () {
		var d = document.documentElement;
		var offset = d.scrollTop + window.innerHeight;
		var height = d.offsetHeight;

		if (offset === height) {
			setSlice((prev) => prev + 20);
		}
	};

	function filteredPokemon(pokemons: Pokemon[]) {
		return pokemons
			.filter((pokemon) =>
				pokemon.name.english
					.toLocaleLowerCase()
					.includes(searchTerm)
			)
			.slice(0, slice);
	}

	return {
		filteredPokemon,
	};
};

export default useFilterHook;
