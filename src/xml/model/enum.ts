import {Option} from "./option";
import {Versioned} from "./versioned";

/** Represents an exclusive choice of values a field can take */
export interface Enum extends Versioned {
	/** Name of the enumeration type */
	name: string;
	/** Type of value this enumeration is stored as */
	storage: string;
	/** Description of the enumeration */
	description: string;
	/** Possible choices for this enumeration */
	options: Option[];
}
