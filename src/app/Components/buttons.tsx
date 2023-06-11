import { useState } from "react";
import {
	SpecialButtons,
	MAX_LENGTH,
	topMenuObject,
	SpecialButtonsList,
} from "../const";
import { listContains } from "./utils";

const useCalculatorHook = () => {
	const [amountDisplay, setAmountDisplay] = useState<string>("0");

	function clearDisplay() {
		setAmountDisplay("0");
	}

	function appendValue(digit: string) {
		if (digit === "AC") {
			clearDisplay();
			return;
		}

		setAmountDisplay((prev) => {
			// If initial state, completely replace
			if (prev === "0") return digit;
			if (prev.length === MAX_LENGTH) return prev;

			const numberOfPeriod = [...prev].filter((x) => x == ".").length;
			const hasOperator = SpecialButtonsList.some((x) =>
				listContains(prev, x)
			);

			// With operator
			if (numberOfPeriod === 2 && digit === "." && hasOperator) {
				return prev;
			}
			// Without operator
			else if (numberOfPeriod === 1 && digit === "." && !hasOperator) {
				return prev;
			}
			// normal operation
			return prev + digit;
		});
	}

	function appendOperator(operator: string) {
		// check if display already has an operator
		// if yes, then do nothing
		setAmountDisplay((prev) => {
			const allOperators = SpecialButtonsList;
			const hasOperator = allOperators.some((x) => listContains(prev, x));
			if (hasOperator) return prev;
			return prev + operator;
		});
	}

	function computeEquals() {
		// check if display has an operator
		// if no, then do nothing
		setAmountDisplay((prev) => {
			const allOperators = SpecialButtonsList;
			const operator: string =
				allOperators.find((x) => listContains(prev, x)) ?? "";

			// If operator not found
			if (operator === "") return prev;
			// Handle compute
			const [firstValue, secondValue] = prev
				.split(operator)
				.map((x) => Number(x));

			switch (operator) {
				case SpecialButtons["%"]:
					return String(firstValue % secondValue);
				case SpecialButtons["-"]:
					return String(firstValue - secondValue);
				case SpecialButtons["+"]:
					return String(firstValue + secondValue);
				case SpecialButtons["x"]:
					return String(firstValue * secondValue);
				default:
					return "ERROR";
			}
		});
	}

	const RenderNumberRow = (list: string[], className?: string) => {
		return list.map((item) => {
			return (
				<button
					className={`btn-number ${className}`}
					key={item}
					onClick={() => {
						appendValue(item);
					}}>
					{item}
				</button>
			);
		});
	};

	const RenderMenuRow = (menuConfig: topMenuObject[], className?: string) => {
		return menuConfig.map(({ buttonLabel }) => {
			return (
				<button
					className={`btn-special-char ${className}`}
					key={buttonLabel}
					onClick={() => {
						appendOperator(buttonLabel);
					}}>
					{buttonLabel}
				</button>
			);
		});
	};

	const RenderEqualButton = () => {
		return (
			<button
				className={"btn-number btn-equal"}
				key={"="}
				onClick={computeEquals}>
				{"="}
			</button>
		);
	};

	return {
		amountDisplay,
		RenderMenuRow,
		RenderNumberRow,
		RenderEqualButton,
	};
};

export default useCalculatorHook;
