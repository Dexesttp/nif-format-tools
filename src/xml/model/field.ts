import {Versioned} from "./versioned";

/** Represents a data field either for a direct type, a pointer, an embedded object or structure or a binary blob */
export interface Field extends Versioned {
	/** The name of this field */
	name: string;
	/** The type of this field's content or array content */
	type: string;
	/** This field is an array, its size is defined by the given reference or values */
	arr1?: string;
	/** The second array size for bi-dimensional array fields */
	arr2?: string;
	/** The argument used in the value of this field is based on the given value or referenced field */
	arg?: string;
	/** This field is virtual */
	abstract?: boolean;
	/** Used by NifSkope. This field represents a binary blob encoded in a non-nif format */
	binary?: boolean;
	/** The size is calculated from the number of vertices */
	calculated?: boolean;
	/** Used by NifLib. If this condition is true, the field will be used - otherwise it won't appear in the structure */
	condition?: string;
	/** This field is described by a compound */
	template?: string;
	/** The default value for this field */
	default?: string;
	/** Description of this field */
	description?: string;
}
