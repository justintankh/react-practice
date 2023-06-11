import { useMemo } from "react";
import "./App.css";
import {
	calculatorTopMenu,
	calculatorTop,
	calculatorMid,
	calculatorBtm,
	calculatorBtmMenu,
} from "./Components/const";
import useCalculatorHook from "./Components/buttons";

function App() {
	const {
		amountDisplay,
		RenderMenuRow,
		RenderNumberRow,
		RenderEqualButton,
	} = useCalculatorHook();

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
			<div className="flexRow">
				<div className="flexColumn flexGrow4">
					<div className="flexRow">{TopRow}</div>
					<div className="flexRow">{MidRow}</div>
					<div className="flexRow">{BtmRow}</div>
					<div className="flexRow">{BtmMenuRow}</div>
				</div>
				<div className="flexGrow1">{RenderEqualButton()}</div>
			</div>
		</div>
	);
}

export default App;
