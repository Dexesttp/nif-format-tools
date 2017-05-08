/** Represents a data type */
export interface Basic {
	/** Name of the type */
	name: string;
	/** The type is an integral type */
	count: number;
	/** Name of the type in the NifLib codebase */
	nifLibType: string;
	/** Name of the type in the NifSkope codebase. Deprecated. */
	nifSkopeType?: string;
	/** The type is a template type */
	isTemplate?: boolean;
	/** Description of the type */
	description: string;
}
