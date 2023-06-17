import React from "react";
import { PokemonContext } from "../context";
import { Pokemon } from "../types";

const PokemonList = () => {
	const {
		methods: { setSelected },
		states: { selected, pokemonList },
	} = React.useContext(PokemonContext);

	function PokemonRow(data: Pokemon) {
		return (
			<div key={data.id.toString()} className="flexColumn">
				<div className="flexRow dataEntry">
					<span className="dataIndex">{data.id}</span>
					<span className="dataField">
						{data.name.english}
					</span>
					<span className="dataField">
						{data.type.join(" ")}
					</span>
					<button
						className="infoButton"
						onClick={() =>
							setSelected(
								/* hide if pressed again */
								selected == data.id ? -1 : data.id
							)
						}>
						More information{" "}
					</button>
				</div>
				{selected === data.id ? (
					<div className="flexRow dataEntry infoBlock">
						<span className="dataField infoField">
							Attack: {data.base.Attack}
						</span>
						<span className="dataField infoField">
							Defense: {data.base.Defense}
						</span>
						<span className="dataField infoField">
							HP: {data.base.HP}
						</span>
						<span className="dataField infoField">
							Sp. Atk: {data.base["Sp. Attack"]}
						</span>
						<span className="dataField infoField">
							Sp. Def: {data.base["Sp. Defense"]}
						</span>
						<span className="dataField infoField">
							Speed: {data.base.Speed}
						</span>
					</div>
				) : (
					<div></div>
				)}
			</div>
		);
	}

	return pokemonList.map((pokemon) => PokemonRow(pokemon));
};

export default PokemonList;
