import { PokemonContextProvider } from "./context/index.tsx";
import PokemonList from "./display/PokemonList.tsx";
import { PokemonSearch } from "./display/PokemonSearch.tsx";

function RenderPokemon() {
	return (
		<div className="flexColumn">
			<h1 id="title">Pokemon Search</h1>
			<PokemonSearch />
			<PokemonList />
		</div>
	);
}

const RenderPokemonWithProvider = () => (
	<PokemonContextProvider>
		<RenderPokemon />
	</PokemonContextProvider>
);

export default RenderPokemonWithProvider;
