import {Option} from "./option";

/** A bitflag can take one or several of its option values, but behaves like an enum for storage purposes */
export interface Bitflag {
	/** Name of the bitflag */
	name: string;
	/** Storage type for the bitflag */
	storage: string;
	/** Description of the bitflag */
	description: string;
	/** Values the BitFlag can take */
	options: Option[];
}
