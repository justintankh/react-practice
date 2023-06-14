import { useState } from "react";
import "./App.css";
import usePokemonHook from "./Pokemon/hooks/usePokemonHook.ts";
import RenderPokemonList from "./Pokemon/index.tsx";
import useFilterHook from "./Pokemon/hooks/useFilterHook.ts";

function App() {
	const { pokemons } = usePokemonHook();
	const { filteredPokemon } = useFilterHook();

	const [searchTerm, setSearchTerm] = useState("");
	const [showId, setShowId] = useState<number>(-1);

	/* First render of hook */
	if (pokemons.length === 0) return <div>Loading...</div>;

	return (
		<>
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
					{RenderPokemonList(
						filteredPokemon(pokemons, searchTerm),
						setShowId,
						showId
					)}
				</div>
			</div>
		</>
	);
}
export default App;
