import {Option} from "./option";

export type Bitflag = {
	name: string,
	storage: string,
	description: string,
	options: Option[],
};
