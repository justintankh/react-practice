import "./App.css";
import { useState } from "react";
import { NumberInput } from "./components/Inputs/NumberInput";
import { RangeInput } from "./components/Inputs/RangeInput";
import { tenureList } from "./const";

function App() {
	const [totalCost, setTotalCost] = useState<number>(0);
	const [intRate, setIntRate] = useState<number>(0);
	const [prosFee, setProsFee] = useState<number>(0);
	const [downPayment, setDownPayment] = useState<number>(0);
	const [loanPerMonth, setLoanPerMonth] = useState<number>(0);
	const [selectedTenure, setSelectedTenure] = useState<number>(0);

	function calculateDownPayment(downPayment: number): string {
		return `SGD${downPayment}`;
	}

	function calculateLoansPerMonth(loanPerMonth: number): string {
		return `#${loanPerMonth}`;
	}

	return (
		<div className="App flexColumn">
			<span className="biggerTitle">EMI Calculator</span>
			<NumberInput
				title="Total Cost of Assets"
				value={totalCost}
				onChange={setTotalCost}
			/>
			<NumberInput
				title="Interest Rate (in %)"
				value={intRate}
				onChange={setIntRate}
			/>
			<NumberInput
				title="Processing Fee (in %)"
				value={prosFee}
				onChange={setProsFee}
			/>
			<RangeInput
				title="Down Payment"
				value={downPayment}
				onChange={setDownPayment}
				min={0}
				max={100}
			/>
			<RangeInput
				title="Loan per month"
				value={loanPerMonth}
				onChange={setLoanPerMonth}
				min={0}
				max={10}
			/>

			<div className="tenureContainer flexColumn">
				<span className="bigTitle">Tenure</span>
				<div className="inputContainer flexRow">
					{tenureList.map((tenure) => {
						return (
							<button
								key={tenure}
								className={
									selectedTenure === tenure
										? "btn-tenure btn-selected"
										: "btn-tenure"
								}
								value={tenure}
								onClick={() => setSelectedTenure(tenure)}
								id={`tenure-${tenure}`}>
								{tenure}
							</button>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default App;
