import {Versioned} from "./versioned";
import {Field} from "./field";

/** Represents a base object available in this file. */
export interface NiObject extends Versioned {
	name: string;
	nifLibType?: string;
	nifSkopeType?: string;
	description: string;
	abstract?: boolean;
	inherit?: string;
	fields: Field[];
}
