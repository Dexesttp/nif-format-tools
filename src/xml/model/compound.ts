import {Field} from "./field";
import {Versioned} from "./versioned";

/** A Compound object is a structure used in place of variables. It is mostly used for abstraction. */
export interface Compound extends Versioned {
	/** Name of the compound */
	name: string;
	/** Type of the compound in the NifLib codebase */
	nifLibType?: string;
	/** Type of the compound in the NifSkope codebase. Deprecated. */
	nifSkopeType?: string;
	/** Defines the compound as a template */
	isTemplate?: boolean;
	/** Description of the compound */
	description: string;
	/** The ordered fields in this compound */
	fields: Field[];
}
