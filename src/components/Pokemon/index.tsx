import PokemonList from "./display/PokemonList.tsx";
import { PokemonSearch } from "./display/PokemonSearch.tsx";
import PokemonStoreProvider from "./provider/index.tsx";

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
	<PokemonStoreProvider>
		<RenderPokemon />
	</PokemonStoreProvider>
);

export default RenderPokemonWithProvider;
