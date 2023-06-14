import { useEffect, useState } from "react";
import { Pokemon } from "../types";

const usePokemonHook = () => {
	const [pokemons, setPokemons] = useState<Pokemon[]>([]);

	useEffect(() => {
		getPokemons();
	}, []);

	const getPokemons = async () => {
		fetch("./src/assets/pokemon.json")
			.then((res) => res.json())
			.then((pokemon) => {
				setPokemons(pokemon);
			});
	};

	return { pokemons };
};

export default usePokemonHook;
