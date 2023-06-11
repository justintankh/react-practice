import { useMemo, useState } from "react";
import "./App.css";
import {
	topMenuObject,
	calculatorTopMenu,
	calculatorTop,
	calculatorMid,
	calculatorBtm,
	calculatorBtmMenu,
	calculatorDivide,
} from "./const";
import useCalculatorHook from "./Components/buttons";

function App() {
	const { amountDisplay, RenderMenuRow, RenderNumberRow, RenderEqualButton } =
		useCalculatorHook();

	const MenuRow = useMemo(() => {
		return <>{RenderMenuRow(calculatorTopMenu)}</>;
	}, []);

	const TopRow = useMemo(() => {
		return (
			<>
				{RenderNumberRow(calculatorTop)}
				{/* {RenderMenuRow(calculatorDivide)} */}
			</>
		);
	}, []);

	const MidRow = useMemo(() => {
		return <>{RenderNumberRow(calculatorMid)}</>;
	}, []);

	const BtmRow = useMemo(() => {
		return <>{RenderNumberRow(calculatorBtm)}</>;
	}, []);

	const BtmMenuRow = useMemo(() => {
		return <>{RenderNumberRow(calculatorBtmMenu)}</>;
	}, []);

	return (
		<div className="flexColumn calculatorModel">
			<div className="flexColumn display">{amountDisplay}</div>
			<div className="flexRow">{MenuRow}</div>
			<div className="numberRow">
				<div className="flexColumn">
					<div className="flexRow">{TopRow}</div>
					<div className="flexRow">{MidRow}</div>
					<div className="flexRow">{BtmRow}</div>
					<div className="flexRow">{BtmMenuRow}</div>
				</div>
				<div>{RenderEqualButton()}</div>
			</div>
		</div>
	);
}

export default App;
