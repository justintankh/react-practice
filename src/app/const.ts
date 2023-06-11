export type topMenuObject = {
	buttonLabel: SpecialButtons;
};

export enum SpecialButtons {
	"+" = "+",
	"-" = "-",
	"x" = "x",
	"%" = "%",
	"/" = "/",
}

export const calculatorTopMenu: topMenuObject[] = [
	{
		buttonLabel: SpecialButtons["+"],
	},
	{
		buttonLabel: SpecialButtons["-"],
	},
	{
		buttonLabel: SpecialButtons["x"],
	},
	{
		buttonLabel: SpecialButtons["%"],
	},
];

export const calculatorDivide: topMenuObject[] = [
	{ buttonLabel: SpecialButtons["/"] },
];

export const calculatorTop = ["7", "8", "9"];
export const calculatorMid = ["4", "5", "6"];
export const calculatorBtm = ["1", "2", "3"];
export const calculatorBtmMenu = ["0", ".", "AC"];

export const MAX_LENGTH = 21;
export const SpecialButtonsList = Object.values(SpecialButtons);
