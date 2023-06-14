import React from "react";
import "./App.css";
import usePokemonHook from "./Pokemon/hooks/usePokemonHook.ts";
import useFilterHook from "./Pokemon/hooks/useFilterHook.ts";
import RenderPokemonList from "./Pokemon/index.tsx";
import {
	PokemonContext,
	PokemonContextProvider,
} from "./Pokemon/context/index.tsx";

function App() {
	const { pokemons } = usePokemonHook();
	const { filteredPokemon } = useFilterHook();

	const {
		methods: { setSearchTerm },
		states: { searchTerm },
	} = React.useContext(PokemonContext);

	return (
		<div className="flexColumn">
			<h1 id="title">Pokemon Search</h1>
			<input
				className="searchField"
				type="text"
				value={searchTerm}
				onChange={(e) =>
					setSearchTerm(
						e.currentTarget.value.toLocaleLowerCase()
					)
				}
				placeholder="Enter the pokemon to search"
			/>
			<div className="flexColumn">
				{RenderPokemonList(filteredPokemon(pokemons))}
			</div>
		</div>
	);
}

const appWithProvider = () => {
	return (
		<PokemonContextProvider>
			<App />
		</PokemonContextProvider>
	);
};

export default appWithProvider;
