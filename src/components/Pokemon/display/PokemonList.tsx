import { Pokemon } from "../types";
import {
	PokemonReducerAction,
	PokemonReducerActionType,
	PokemonReducerState,
} from "../reducer/types";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";

const PokemonList = () => {
	const dispatch = useDispatch<Dispatch<PokemonReducerAction>>();
	const pokemonList = useSelector<
		PokemonReducerState,
		PokemonReducerState["pokemonList"]
	>((state) => state.pokemonList);
	const selected = useSelector<
		PokemonReducerState,
		PokemonReducerState["selected"]
	>((state) => state.selected);

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
							dispatch({
								type: PokemonReducerActionType.SET_SELECT,
								payload:
									selected == data.id
										? -1
										: data.id,
							})
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
