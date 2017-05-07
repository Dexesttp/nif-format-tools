import {Versioned} from "./versioned";
import {Field} from "./field";

export interface NiObject extends Versioned {
	name: string,
	nifLibType?: string,
	nifSkopeType?: string,
	description: string,
	abstract?: boolean,
	inherit?: string,
	fields: Field[],
}