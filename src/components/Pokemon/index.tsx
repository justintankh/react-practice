import { Pokemon } from "./types";

const PokemonList = (
	list: Pokemon[],
	setShowId: React.Dispatch<React.SetStateAction<number>>,
	showId: number
) => {
	function PokemonRow(data: Pokemon, showInfoId: number) {
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
					<span className="dataField">URL</span>
					<button
						className="infoButton"
						onClick={() =>
							/* hide if pressed again */
							setShowId((prev: number) => {
								if (prev === data.id) return -1;
								return data.id;
							})
						}>
						More information{" "}
					</button>
				</div>
				{showInfoId === data.id ? (
					<div className="flexRow">
						<span className="dataField">
							Attack: {data.base.Attack}
						</span>
						<span className="dataField">
							Defense: {data.base.Defense}
						</span>
						<span className="dataField">
							HP: {data.base.HP}
						</span>
						<span className="dataField">
							Sp. Atk: {data.base["Sp. Attack"]}
						</span>
						<span className="dataField">
							Sp. Def: {data.base["Sp. Defense"]}
						</span>
						<span className="dataField">
							Speed: {data.base.Speed}
						</span>
					</div>
				) : (
					<></>
				)}
			</div>
		);
	}

	return list.map((pokemon) => PokemonRow(pokemon, showId));
};

export default PokemonList;
