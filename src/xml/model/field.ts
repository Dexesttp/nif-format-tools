import {Versioned} from "./versioned";

export interface Field extends Versioned {
	name: string;
	type: string;
	arr1?: string;
	arr2?: string;
	binary?: boolean,
	condition?: string;
	template?: string;
	default?: string;
	description?: string;
};
