import { useState } from "react";
import "./App.css";
import {
	topMenuObject,
	calculatorTopMenu,
	calculatorTop,
	calculatorMid,
	calculatorBtm,
	calculatorBtmMenu,
} from "./const";

function App() {
	const [amount, setAmount] = useState<number>(0);
	const [storedAmount, setStoredAmount] = useState<number>(0);
	const [decimalAmount, setDecimalAmount] = useState<number>(0);
	const [decimalFlag, setDecimalFlag] = useState<boolean>(false);
	const [compute, setCompute] =
		useState<topMenuObject["buttonLabel"]>(undefined);

	function displayAmount(amount: number, decimalAmount: number): string {
		return `${amount}.${decimalAmount}`;
	}

	function clearDisplay(amount: number, decimalAmount: number) {
		const numberFormat = Number(displayAmount(amount, decimalAmount));
		setStoredAmount(numberFormat);
		setAmount(0);
		setDecimalAmount(0);
	}

	function addNumber(numberKey: string) {
		console.log({ numberKey });
		if (decimalFlag) {
			setDecimalAmount((prevValue) => Number(`${prevValue}` + numberKey));
		} else {
			setAmount((prevValue) => Number(`${prevValue}` + numberKey));
		}
	}

	function computeAmount() {
		switch (compute) {
			case "%":
				setAmount(storedAmount % amount);
				break;
			case "-":
				setAmount(storedAmount - amount);
				break;
			case "+":
				setAmount(storedAmount + amount);
				break;
			case "x":
				setAmount(storedAmount * amount);
				break;
			case ".":
				setDecimalFlag((flag) => !flag);
				setAmount(storedAmount);
			default:
				setAmount(storedAmount);
				break;
		}
	}

	function RenderMenuRow(menuConfig: topMenuObject[]) {
		return menuConfig.map(({ buttonLabel }) => {
			return (
				<button
					className="btn-top-menu"
					key={buttonLabel}
					onKeyDown={() => {
						console.log("PRESSED");
						clearDisplay(amount, decimalAmount);
						setCompute(buttonLabel);
					}}>
					{buttonLabel}
				</button>
			);
		});
	}

	function RenderNumberRow(list: string[]) {
		return list.map((item) => {
			return (
				<button
					className={"btn-number "}
					key={item}
					onKeyDown={() => {
						addNumber(item);
					}}>
					{item}
				</button>
			);
		});
	}

	function RenderEqualButton() {
		return (
			<button
				className={"btn-number btn-equal"}
				key={"="}
				onKeyDown={computeAmount}>
				{"="}
			</button>
		);
	}

	return (
		<div className="flexColumn calculatorModel">
			<div className="flexColumn display">{`${displayAmount(
				amount,
				decimalAmount
			)}`}</div>
			<div className="flexRow">{RenderMenuRow(calculatorTopMenu)}</div>
			<div className="numberRow">
				<div className="flexColumn">
					<div className="flexRow">
						{RenderNumberRow(calculatorTop)}
					</div>
					<div className="flexRow">
						{RenderNumberRow(calculatorMid)}
					</div>
					<div className="flexRow">
						{RenderNumberRow(calculatorBtm)}
					</div>
					<div className="flexRow">
						{RenderNumberRow(calculatorBtmMenu)}
					</div>
				</div>
				<div>{RenderEqualButton()}</div>
			</div>
		</div>
	);
}

export default App;
