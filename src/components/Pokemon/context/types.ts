export type PokemonContextType = {
	states: {
		searchTerm: string;
		showId: number;
	};
	methods: {
		setShowId: React.Dispatch<React.SetStateAction<number>>;
		setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
	};
};
