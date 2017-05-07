import {Option} from "./option";
import {Versioned} from "./versioned";

export interface Enum extends Versioned {
	name: string,
	storage: string,
	description: string,
	options: Option[],
};
