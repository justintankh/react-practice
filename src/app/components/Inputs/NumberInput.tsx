import React from "react";
import "./style.css";

export interface NumberInputProps {
	title: string;
	value: number;
	onChange: React.Dispatch<React.SetStateAction<number>>;
}

export function NumberInput({ title, value, onChange }: NumberInputProps) {
	return (
		<div className="inputContainer flexColumn">
			<span className="bigTitle">{title}</span>
			<input
				className="inputField"
				type={"number"}
				placeholder={title}
				value={value}
				onChange={(e) => onChange(e.currentTarget.valueAsNumber)}
			/>
		</div>
	);
}
