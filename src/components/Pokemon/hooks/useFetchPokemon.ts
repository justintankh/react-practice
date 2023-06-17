import { useEffect, useState } from "react";
import { Pokemon } from "../types";

const useFetchPokemon = () => {
	const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

	useEffect(() => {
		getPokemons();
	}, []);

	const getPokemons = async () => {
		fetch("./src/assets/pokemon.json")
			.then((res) => res.json())
			.then((pokemon) => {
				setPokemonList(pokemon);
			});
	};

	return { pokemonList };
};

export default useFetchPokemon;
