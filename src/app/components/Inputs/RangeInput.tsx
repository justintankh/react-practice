import "./style.css";
import { NumberInputProps } from "./NumberInput";

type RangeInputProps = {
	min: number;
	max: number;
} & NumberInputProps;

export function RangeInput({
	title,
	value,
	min,
	max,
	onChange,
}: RangeInputProps) {
	return (
		<div className="inputContainer flexColumn">
			<span className="bigTitle">{title}</span>
			<input
				className="inputField"
				placeholder={title}
				type={"range"}
				min={min}
				max={max}
				value={value}
				onChange={(e) => onChange(e.currentTarget.valueAsNumber)}
			/>
			<div className="flexRow bigTitle">
				<label>{min}</label>
				<b>{value}</b>
				<label>{max}</label>
			</div>
		</div>
	);
}
