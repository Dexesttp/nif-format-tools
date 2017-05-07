import {Field} from "./field";
import {Versioned} from "./versioned";

export interface Compound extends Versioned {
	name: string,
	nifLibType?: string,
	nifSkopeType?: string,
	description: string,
	isTemplate?: boolean,
	fields: Field[],
};
