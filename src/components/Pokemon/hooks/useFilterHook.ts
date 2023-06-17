import { useState } from "react";
import { Pokemon } from "../types";

const useFilterHook = () => {
	const [slice, setSlice] = useState<number>(20);

	window.onscroll = function () {
		var d = document.documentElement;
		var offset = d.scrollTop + window.innerHeight;
		var height = d.offsetHeight;

		/* increase content scrollbar smaller */
		if (offset === height) {
			setSlice((prev) => prev + 20);
		}
		/* Lesson content scrollbar smaller */
		if (
			Math.round(offset) < Math.round(height / 2) &&
			slice > 20
		) {
			setSlice((prev) => prev - 20);
		}
	};

	function filteredPokemon(pokemons: Pokemon[], text: string) {
		return pokemons
			.filter((pokemon) =>
				pokemon.name.english
					.toLocaleLowerCase()
					.includes(text)
			)
			.slice(0, slice);
	}

	return {
		filteredPokemon,
		slice,
	};
};

export default useFilterHook;
