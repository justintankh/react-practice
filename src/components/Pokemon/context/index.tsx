import React from "react";
import { PokemonContextType } from "./types";

export const PokemonContext = React.createContext<PokemonContextType>(
	{} as any
);

export const PokemonContextProvider: React.FC<{
	children?: React.ReactNode;
}> = ({ children }) => {
	const [searchTerm, setSearchTerm] = React.useState<string>("");
	const [showId, setShowId] = React.useState<number>(-1);

	const providerValues: PokemonContextType = {
		states: {
			searchTerm,
			showId,
		},
		methods: {
			setShowId,
			setSearchTerm,
		},
	};

	return (
		<PokemonContext.Provider value={providerValues}>
			{children}
		</PokemonContext.Provider>
	);
};
